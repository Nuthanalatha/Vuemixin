export default function example1Mixin(initialCount, countValue) {
  return {
    data() {
      return {
        sub: initialCount,
      };
    },
    methods: {
      subtract() {
        this.sub = initialCount - countValue;
      },
    },
  };
}
