<template>
  <div class="row">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <h2>{{ bookable.title }}</h2>
          <hr />
          <article>{{ bookable.description }}</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookable: null,
    };
  },
  created() {
    axios.get(`/api/bookables/${this.$route.params.id}`).then((response) => {
      this.bookable = response.data;
    });
  },
};
</script>
