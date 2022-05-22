<template>
  <div>
    Rows is: {{ rows }}
    <div v-if="!loading">
      <div class="card">
        <div class="card-header">Data is Loading......</div>
      </div>
    </div>

    <div v-else>
      <bookable-list-item
        :item-title="bookable.title"
        :item-content="bookable.content"
        :price="bookable.price"
        v-for="(bookable, index) in bookables"
        :key="index"
      ></bookable-list-item>
    </div>
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
      bookables: null,
      loading: false,
      columns: 3,
    };
  },
  computed: {
    rows() {
      return this.bookables == null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    },
  },
  created() {
    setTimeout(() => {
      this.loading = true;
      this.bookables = [
        {
          title: "Cheap Villa..",
          content: "A budget friendly villa",
          price: 150000,
        },
        {
          title: "Costly Villa",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa",
          content: "A rich friendly villa",
          price: 2000000,
        },
      ];
    }, 2000);
  },
};
</script>
