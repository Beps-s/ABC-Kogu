<!-- Siia tuleb Book component, ehk see, kus on raamatu pilt, nimi ja autor main pagel näiteks -->

<template>
  <div>
    <div class="col">
        <div class="card h-100">
            <a class="card-link" href="/bookPage">
                <img src="{{ image }}" class="card-img-top">
                <div class="card-body text-center">
                    <h5 id="book-name" class="card-title" style="margin: 0">{{ pealkiri }}</h5>
                </div>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            "pealkiri",
            "pilt"
        ]
    }
</script>

<style scoped>

</style>