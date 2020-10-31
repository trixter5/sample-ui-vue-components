import ButtonIcon from "./../Buttons/Button-icon/index.vue";

export default {
  components: {
    ButtonIcon
  },
  props: {
    value: Blob,
    formats: Array,
    size: Number
  },
  computed: {
    formatsString: {
      get() {
        return this.formats ? this.formats.join(", ") : "*";
      }
    }
  },
  methods: {
    triggerUpload() {
      this.$refs.upload.click();
    },
    handleFileChange(e) {
      const file = e.target.files[0];
      if (file && this.beforeFileUpload(file)) {
        this.$emit("input", file);
      } else {
        this.$emit("input", null);
      }
    },
    beforeFileUpload(file) {
      const fileType = file.type;
      const fileSize = file.size / 1024;
      const isFormatValid = !!this.formats.includes(fileType);
      const isSizeValid = fileSize < this.size;

      if (!isFormatValid) {
        window.alert("Неверный формат файла!");
      }
      if (!isSizeValid) {
        window.alert("Файл слишком большой!");
      }
      return isFormatValid && isSizeValid;
    }
  }
};
