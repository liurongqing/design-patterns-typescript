// 适配器模式

interface MediaPlayer {
    play(audioType: string, fileName: string): void
}

interface AdvancedMediaPlayer {
    playVlc(fileName: string): void
    playMp4(fileName: string): void
}

class VlcPlayer implements AdvancedMediaPlayer {
    playVlc(fileName: string) {
        console.log('playVlc')
    }
    playMp4(filename: string) {
        // 什么也不做
    }
}

class Mp4Player implements AdvancedMediaPlayer {
    playVlc(fileName: string) { }
    playMp4(fileName: string) {
        console.log('playMp4')
    }
}

class MediaAdapter implements MediaPlayer {
    advancedMusicPlayer: any
    constructor(audioType: string) {
        if (audioType === 'vlc') {
            this.advancedMusicPlayer = new VlcPlayer()
        } else if (audioType === 'mp4') {
            this.advancedMusicPlayer = new Mp4Player()
        }
    }
    play(audioType: string, fileName: string) {
        if (audioType === 'vlc') {
            this.advancedMusicPlayer.playVlc(fileName)
        } else if (audioType === 'mp4') {
            this.advancedMusicPlayer.playMp4(fileName)
        }
    }
}

class AudioPlayer implements MediaPlayer {
    mediaAdapter: any
    play(audioType: string, fileName: string) {
        if (audioType === 'mp3') {
            console.log('mp3...')
        } else if (audioType === 'vlc' || audioType === 'mp4') {
            this.mediaAdapter = new MediaAdapter(audioType)
            this.mediaAdapter.play(audioType, fileName)
        } else {
            console.log('不支持')
        }
    }
}

// 使用
class AdapterPatternDemo {
    main() {
        const audioPlayer = new AudioPlayer()
        audioPlayer.play('mp3', 'xx.mp3')
        audioPlayer.play('mp4', 'xx.mp4')
        audioPlayer.play('vlc', 'xx.vlc')
        audioPlayer.play('avi', 'xx.avi')
    }
}