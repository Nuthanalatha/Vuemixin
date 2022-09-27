// Mixins are a flexible way to distribute reusable functionalities for Vue components.
//  A mixin object can contain any component options. When a component uses a mixin,
//  all options in the mixin will be “mixed” into the component’s own options.

// reusibility of logical code

export default function counterMixins(initialCount, countValue) {
  return {
    data() {
      return {
        counter: initialCount,
      };
    },
    methods: {
      increment() {
        this.counter += countValue;
      },
      decrement() {
        this.counter -= countValue;
      },
      reset() {
        this.counter = 0;
      },
    },
  };
}
