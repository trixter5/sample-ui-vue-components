import Avatar from "./../../Avatar/index.vue";
import Rating from "./../Rating/index.vue";
import svgIcon from "./../../svgIcon/index.vue";

export default {
  components: {
    Avatar,
    Rating,
    svgIcon
  },
  data() {
    return {
      renderTimePast: null,
      timer: null
    };
  },
  props: {
    event: {
      type: Object
    }
  },
  computed: {
    getEventAva() {
      return this.event.user.avatarURL;
    },
    getEventSource() {
      return `${this.event.user.firstName} ${this.event.user.lastName}`;
    },
    getReadStatus() {
      return this.event.read;
    },
    getEventIcon() {
      if (this.event.action === "new") {
        return "User-follow-autodeals-on";
      }
      if (this.event.action === "update") {
        return "User-follow-off";
      }
    },
    getEventText() {
      /*if (this.event.action === "new" && this.event.eventOwner) {
        return `Вы подписались на <a class="event__link">${this.event.eventProvider}</a>`;
      } else*/
      if (this.event.action === "new") {
        return `<a href="/" class="event__link">${this.getEventSource}</a> подписался на вас по счету ${this.event.account.sequenceId}</br>котракт ${this.event.contract}`;
      }
      /*if (
        this.event.eventType === "followOff" &&
        this.event.eventOwner === true
      ) {
        return `Вы отписались от <a class="event__link">${this.event.eventProvider}</a>`;
      } else */
      if (this.event.action === "update") {
        return `<a class="event__link">${this.getEventSource}</a> отписался от вас по счету ${this.event.account.sequenceId}</br>котракт ${this.event.contract}`;
      }
    }
  },
  methods: {
    getEventTime() {
      const time = Date.now();
      let currentTime = Date.now();

      setInterval(() => {
        currentTime = Date.now();
        this.renderTimePast = this.renderTime(time, currentTime);
      }, 10000);
    },
    renderTime(a, b) {
      const diffTime = b - a;
      const timeDays = (diffTime / (1000 * 60 * 60 * 24)).toFixed(0);
      const timeHours = (diffTime / (1000 * 60 * 60)).toFixed(0);
      const timeMinutes = (diffTime / (1000 * 60)).toFixed(0);

      if (+timeMinutes < 1) {
        return "только что";
      } else if (+timeMinutes < 60) {
        if (+timeMinutes < 5 && +timeMinutes >= 2) {
          return `${timeMinutes} минуты назад`;
        } else if (+timeMinutes < 2) {
          return `${timeMinutes} минута назад`;
        } else {
          return `${timeMinutes} минут назад`;
        }
      } else if (timeHours < 24) {
        if (+timeHours < 5 && timeHours >= 2) {
          return `${timeHours} часа назад`;
        } else if (+timeHours < 2) {
          return `${timeHours} час назад`;
        } else {
          return `${timeHours} часов назад`;
        }
      } else {
        if (+timeDays < 5 && +timeDays >= 2) {
          return `${timeDays} дня назад`;
        } else if (+timeDays < 2) {
          return `${timeDays} день назад`;
        } else {
          return `${timeDays} дней назад`;
        }
      }
    },
    setAsRead() {
      this.$emit("readNoti", "event");
      this.timer = null;
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.setAsRead();
    }, 5000);
    this.getEventTime();
  }
};
