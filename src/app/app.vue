<template>
  <main>
    <h1 class="title">Bulma</h1>

    <p class="subtitle">
      Modern CSS framework based on
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
        >Flexbox</a
      >
    </p>

    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Input" />
      </div>
    </div>

    <div class="field">
      <p class="control">
        <span class="select">
          <select>
            <option>Select dropdown</option>
          </select>
        </span>
      </p>
    </div>

    <div class="buttons">
      <a class="button is-primary">Primary</a>
      <a class="button is-link">Link</a>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { SetupContext } from "vue";
/**
 * Studio90srls main class
 */
@Options<Studio90srls>({
  watch: {
    count(newC: number, oldC: number) {
      console.info("watched count called", newC, oldC);
      if (newC % 2 === 0) {
        this.increment();
      }
    },
  },
})
export default class Studio90srls extends Vue {
  message: string = "Hello Vue js (from custmo webpack config)";
  count: number = 0;
  todos = [
    {
      id: 1,
      title: "Do the dishes",
    },
    {
      id: 2,
      title: "Take out the trash",
    },
    {
      id: 3,
      title: "Mow the lawn",
    },
  ];

  constructor(prop: Record<string, any>, context: SetupContext) {
    super(prop, context);
    console.info("Vue component constructor", prop, context);
  }

  created() {
    console.info("component instance created", this.$watch);
  }

  increment() {
    this.count++;
  }

  get limitMessage(): string | null {
    console.info("Componted method called");
    return this.count > 3 ? "Limit over diabled" : null;
  }
}
</script>

