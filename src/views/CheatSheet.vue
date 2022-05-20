<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Pronoums
            </button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              Á-model
            </button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              Í-model
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active p-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <PronoumList />
          </div>
          <div class="tab-pane fade p-5" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <AModelList />
          </div>
          <div class="tab-pane fade p-5" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <IModelList />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import AModelList from "@/components/AModelList.vue";
import IModelList from "@/components/IModelList.vue";
import PronoumList from "@/components/PronoumList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    PronoumList,
    AModelList,
    IModelList
  }
})
export default class CheatSheet extends Vue {
  
}
</script>
<style scoped>
table {
  color: #A2B38B !important;
  font-size: larger;
}
</style>