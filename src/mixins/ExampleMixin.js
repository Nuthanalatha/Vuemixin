export default function exampleMixin(initialCount, countValue) {
  return {
    data() {
      return {
        add: initialCount,
      };
    },
    methods: {
      adding() {
        this.add = initialCount + countValue;
      },
    },
  };
}
