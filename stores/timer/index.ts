import { defineStore } from 'pinia';

let countdown: any;

const getDefaultState = () => ({
  showTime: '00:00',
  endAt: '00:00',
});

type RootState = ReturnType<typeof getDefaultState>;

export const useTimerStore = defineStore('timer', {
  state: getDefaultState,
  getters: {},
  actions: {
    reset() {
      clearInterval(countdown);
      this.showTime = '00:00';
    },
    /**
     * @method runStopwatch => Starts the stopwatch
     * @param {number} duration Must be in seconds
     * @returns {void}
     **/
    runStopwatch(duration: number) {
      this.reset();
      const now = Date.now();
      const then = now + duration * 1000;
      // Display remaining time (using duration)
      this.displayTimeLeft(duration);
      // Display Ending time (using then)
      this.displayEndTime(then);

      // setting up countdown
      countdown = setInterval(() => {
        const remainedSeconds = Math.round((then - Date.now()) / 1000);
        if (remainedSeconds < 0) {
          clearInterval(countdown);
          return;
        }

        if (remainedSeconds < 11) {
          // install beeb sounds
          // install TTS
        }
        // trigger Display remaining time
        this.displayTimeLeft(remainedSeconds);
      }, 1000);
    },

    displayTimeLeft(seconds: number) {
      const minutes = Math.floor(seconds / 60);
      const secondsLeft = seconds % 60;
      this.showTime = `${minutes < 10 ? 0 : ''}${minutes}:${
        secondsLeft < 10 ? 0 : ''
      }${secondsLeft}`;
      // TODO: setup TTS engine here later
    },

    displayEndTime(timestamp: number) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const CorrHours = hour > 12 ? hour - 12 : hour;
      const minutes = end.getMinutes();
      this.endAt = `${CorrHours < 10 ? 0 : ''}${CorrHours}:${
        minutes < 10 ? 0 : ''
      }${minutes}`;
    },
  },
});
