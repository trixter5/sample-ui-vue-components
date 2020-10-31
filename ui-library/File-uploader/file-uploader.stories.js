import FileUploader from "./index.vue";
import Avatar from "./../../Avatar/index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/FileUploader",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: FileUploader,
    componentSubtitle: "File Uploader"
  }
};

const taskTemplate = `<div><File-uploader @input="onInput($event)" :formats="formats" :size="sizeKB">FileUploader</File-uploader><Avatar :src="file"></Avatar></div>`;

export const TestFileUploader = () => ({
  components: { FileUploader, Avatar },

  template: taskTemplate,
  data() {
    return {
      file: null,
      formats: ["image/jpg", "image/jpeg", "image/png"],
      sizeKB: 700
    };
  },
  methods: {
    onInput(e) {
      this.value = e;
    }
  }
});
