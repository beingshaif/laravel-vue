<template>
  <div>
    <bookable-list-item
      item-title="Cheap Villa"
      item-content="A budget friendly villa"
      v-bind:price="100000"
    ></bookable-list-item>
    <bookable-list-item
      item-title="Costly Villa"
      item-content="A rich friendly villa"
      v-bind:price="1500000"
    ></bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
  data() {
    return {

    }
  },
  created() {
    console.log("Created");
  },
};
</script>
