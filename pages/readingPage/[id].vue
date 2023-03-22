<template>
    <div class="container my-5" style="display:flex; align-items:center;">
        <div id="book" style="width:22%; text-align:center;">
            <div class="col-md-12">
                <div>
                    <img :src="'https://zbtfeoishdvbsciusmsn.supabase.co/storage/v1/object/public/images/' + books[0].Pilt"
                        style="width: 200px" alt="Book cover">
                </div>
                <h3 class="mb-4">{{ books[0].Pealkiri }}</h3>
                <h5 class="mb-1">{{ books[0].Autor }}</h5>
            </div>
        </div>
        <div id="text" style="width:70%; text-align:center; background-color: lightgoldenrodyellow; padding: 40px;">
            <p class="mb-4">{{ books[0].Sisu }}</p>
            <p>Lehekülg 1/40</p>
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseClient()
const { id } = useRoute().params

let { data: books, error } = await client
    .from('RAAMATUD')
    .select('*')
    .eq('Raamatu_ID', id)

</script>

<style scoped>
@media (max-width: 768px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #book,
    #text {
        width: 100%;
    }
}</style>
