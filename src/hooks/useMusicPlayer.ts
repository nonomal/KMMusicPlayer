// 播放模式枚丽数
import { PlayMode } from '@/enum'
import { Track } from '@/stores/interface';
import { urlV1, lyric } from '@/api'
import { ElNotification } from 'element-plus'
import { LyricData } from '@/utils/parseLyrics'
export function useMusicPlayer() {
    const audioStore = useAudioStore();
    // 计算属性，用来获取当前播放的歌曲
    const currentSong = computed(() => audioStore.trackList[audioStore.currentSongIndex as number]);
    // 用于追踪播放状态的响应式变量 
    const isPlaying = ref(false);
    // 当前播放模式的响应式变量
    const playMode = ref(PlayMode.Sequence);
    // 创建一个新的Audio实例
    const audioElement = ref(new Audio());
    // 添加当前时间和总时间的响应式引用
    const currentTime = ref(0);
    const duration = ref(0);
    // 音量控制
    const volume = ref(70); // 音量范围：0到100
    // 音乐歌词
    const lyricsData = ref<LyricData>({
        lines: []
    });
    // 用于追踪当前歌词索引
    const currentLyricIndex = ref(0);

    const lyricTranslateY = ref<number>(0); // 用于控制歌词偏移的 translateY 值
    const containerHeight = 600; // 歌词容器的高度

    // 在组件挂载时添加事件监听器
    onMounted(() => {
        audioElement.value.src = currentSong.value.source
        audioElement.value.ontimeupdate = () => {
            currentTime.value = audioElement.value.currentTime;
        };

        audioElement.value.onloadedmetadata = () => {
            duration.value = audioElement.value.duration;
        };
        // 初始化音量
        audioElement.value.volume = volume.value / 100; // 将音量转换为 0 到 1 的范围

        // 错误处理
        audioElement.value.onerror = async () => {
            const { data } = await urlV1(currentSong.value.id)
            audioStore.setCurrentSongUrl(data[0].url)
            audioElement.value.src = data[0].url
            audioElement.value.play();
            isPlaying.value = true;
        };

        // 歌曲播放完毕后自动切换
        audioElement.value.onended = () => {
            playNext();
        };
    });

    // 加载歌词
    async function Loadlyrics() {
        lyricsData.value = { lines: [] }
        try {
            if (currentSong.value.Lyric && (currentSong.value.Lyric.lines.length > 0 || currentSong.value.Lyric.remark)) {
                // 如果 `currentSong` 已有歌词
                // 这里可直接更新使用已有的 `lyric` 字段
                // 在模板中用它的 `lyric` 字段显示
                lyricsData.value = currentSong.value.Lyric
            } else {
                const result = await lyric(currentSong.value.id); // 调用 API 获取歌词
                lyricsData.value = parseAndMergeLyrics(result)
                // 缓存歌词
                audioStore.setCurrentSonglyrics(lyricsData.value)
            }
            // 初始化歌词
            findCurrentLyricIndex()
        } catch (error) {
            console.error('获取歌词时出错:', error);
        }
    }

    // 计算歌词的行高
    const lineHeight = computed(() => {
        const currentLine = lyricsData.value.lines[currentLyricIndex.value];

        if (!currentLine) return 0; // 避免出现 undefined

        // 计算该行的显示高度
        // 假设每行的单个文本行（例如，仅包括 `text`）的高度默认为 28px，
        // 如果有翻译和罗马音，则根据需要调整
        const numberOfLines = [
            currentLine.text,
            currentLine.translation || '',
            currentLine.romaLrc || ''
        ].filter(line => line).length;

        return numberOfLines === 1 ? 28 : numberOfLines === 2 ? 48 : 68; // 自定义您的高度
    });

    // 用于查找当前歌词索引并计算 translateY 值
    function findCurrentLyricIndex(newTime = 0) {
        if (lyricsData.value.lines.length === 0) return;

        const targetIndex = lyricsData.value.lines.findIndex(line => line.time > newTime * 1000);
        currentLyricIndex.value = targetIndex === -1 ? lyricsData.value.lines.length - 1 : targetIndex - 1;

        // 计算歌词位置偏移以确保居中
        const centerPosition = containerHeight / 2;
        const currentLyricPosition = currentLyricIndex.value * lineHeight.value;

        lyricTranslateY.value = -(currentLyricPosition - centerPosition + lineHeight.value / 2);
    }

    // 计算用于歌词滚动的样式
    const scrollStyle = computed(() => {
        return {
            transform: `translateY(${lyricTranslateY.value}px)`,
            transition: 'transform 0.3s ease-in-out', // 添加平滑过渡效果
        };
    });

    // 更新currentLyricIndex
    watch(currentTime, (newTime) => {
        findCurrentLyricIndex(newTime); // 每次 currentTime 更新时查找当前歌词索引
    });

    // 播放音乐
    function play() {
        audioElement.value.play();
        isPlaying.value = true;
    }

    // 暂停音乐
    function pause() {
        audioElement.value.pause();
        isPlaying.value = false;
    }

    // 切换播放/暂停状态
    function togglePlayPause() {
        if (isPlaying.value) {
            pause();
        } else {
            play();
        }
    }

    // 设置播放模式
    function setPlayMode(mode: PlayMode) {
        playMode.value = mode;
        ElNotification({
            title: 'Play mode',
            message: mode + ' mode',
            type: 'success',
        })
    }

    // 播放下一首歌曲
    function playNext() {
        switch (playMode.value) {
            case PlayMode.Random: // 如果是随机模式，则随机选择一首歌曲播放
                playRandomSong();
                break;
            case PlayMode.Single: // 单曲循环模式，重新播放当前歌曲
                audioElement.value.currentTime = 0; // 回到开头
                play();
                break;
            default: // 对于顺序播放和列表循环模式，播放列表中的下一首歌
                let nextIndex = audioStore.currentSongIndex as number + 1;
                if (nextIndex >= audioStore.trackList.length) {
                    nextIndex = 0; // 如果是最后一首歌，则回到列表的开始
                }
                audioStore.setCurrentSong(nextIndex);
                audioElement.value.src = currentSong.value.source; // 更新audio元素的资源地址
                Loadlyrics()
                play();
                break;
        }
    }

    // 播放上一首歌曲
    function playPrevious() {
        let previousIndex = audioStore.currentSongIndex as number - 1;
        if (previousIndex < 0) {
            previousIndex = audioStore.trackList.length - 1; // 如果是第一首歌，则跳到列表的最后
        }
        audioStore.setCurrentSong(previousIndex);
        audioElement.value.src = currentSong.value.source; // 更新audio元素的资源地址
        Loadlyrics()
        play();
    }

    // 随机播放一首歌曲
    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * audioStore.trackList.length);
        audioStore.setCurrentSong(randomIndex); // 设置当前歌曲为随机选择的歌曲
        audioElement.value.src = currentSong.value.source; // 更新audio元素的资源地址
        play();
    }

    // 改变当前歌曲时间
    const changeCurrentTime = (currentTime: number) => {
        audioElement.value.currentTime = currentTime;
    };

    // 设置音量
    const setVolume = (newVolume: number) => {
        volume.value = newVolume;
        audioElement.value.volume = newVolume / 100; // 将音量转换为 0 到 1 的范围
    };

    // 添加播放歌曲的方法
    const playSong = (song: Track) => {
        audioElement.value.src = song.source; // 确保您设置此歌曲的音频源
        play(); // 播放歌曲
    };
    return {
        currentSong,
        isPlaying,
        play,
        playNext,
        playPrevious,
        togglePlayPause,
        playMode,
        setPlayMode,
        audioElement,
        currentTime, // 暴露当前播放时间
        duration, // 暴露歌曲总时间
        changeCurrentTime,
        setVolume,
        volume,
        playSong,
        Loadlyrics,
        lyricsData,
        currentLyricIndex,
        scrollStyle,
    };
}