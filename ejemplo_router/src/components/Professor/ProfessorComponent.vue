<template>
    <div>
        <h3>Professor</h3>
    </div>
    <div>
        <h3>Professors list</h3>
        <a @click="this.$router.push(`${this.$route.path}/professor_a`)">Professor A</a> |
        <router-link :to="{name:'professorb'}">Professor B</router-link> |
        <router-link :to="{name:'professorc'}">Professor C</router-link>
    </div>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'ProfessorComponent'
}
</script>

<style>

</style>