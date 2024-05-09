import { reactive, readonly } from "vue";

const state = reactive({
  isDark: 0,
});

const toggleDarkMode = () => {
  if (state.isDark) state.isDark = 0;
  else state.isDark = 1;
};

export default readonly({
  get isDark() {
    return state.isDark;
  },
  toggleDarkMode,
});
