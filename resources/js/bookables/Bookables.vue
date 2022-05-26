<template>
  <div>
    Rows is: {{ rows }}
    <div v-if="!loading">
      <div class="card mb-4">
        <div class="card-body">Data is Loading......</div>
      </div>
    </div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div
          class="col"
          v-for="(bookable, column) in bookablesInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :item-title="bookable.title"
            :item-content="bookable.content"
            :price="bookable.price"
          ></bookable-list-item>
        </div>
        <div
          class="col"
          v-for="p in placeholdersInRow(row)"
          :key="'placeholder' + row + p"
        >
        </div>
      </div>
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
  methods: {
    bookablesInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholdersInRow(row) {
        return this.columns - this.bookablesInRow(row).length;
    }
  },
  created() {
    const p = new Promise((resolve, reject) => {
        console.log(resolve);
        console.log(reject);
        setTimeout(() => {
            resolve("Hello");
        }, 3000);
    })
    .then(result => "Hello Again" + result)
    .then(result => console.log(`Success ${result}`))
    .catch(result => console.log(`Error ${result}`))
    ;
    console.log(p);
    setTimeout(() => {
      this.loading = true;
      this.bookables = [
        {
          title: "Cheap Villa..",
          content: "A budget friendly villa",
          price: 150000,
        },
        {
          title: "Costly Villa 1",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa 2",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa 3",
          content: "A rich friendly villa",
          price: 2000000,
        },
        {
          title: "Costly Villa 4",
          content: "A rich friendly villa",
          price: 2000000,
        },
      ];
    }, 2000);
  },
};
</script>
