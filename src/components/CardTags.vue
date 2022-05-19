<template>
    <div class="pt-2">
        <ul>
            <li v-for="(tag, index) in cardTags" v-bind:key="index" class="tag-list">
                <span class="badge bg-success">{{tag}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Store } from "@/store/store";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    store: Object
  },
})
export default class CardTags extends Vue {
  store!: Store;
  
  get cardTags() : string[] {
      return this.store.currentCard?.tags ?? [];
  }

}
</script>
