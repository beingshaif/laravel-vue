<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ itemTitle }}</div>

          <div class="card-body">
            {{ itemContent }}, <small>{{ price }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { itemTitle: String, itemContent: String, price: Number },
};
</script>
