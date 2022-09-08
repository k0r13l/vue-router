<template>
    <div>
        <h3>Student</h3>
    </div>
    <div>
        <h3>Student List list</h3>
        <router-link :to="{name:'studenta'}">Student A</router-link> |
        <router-link :to="{name:'studentb'}">Student B</router-link> |
        <router-link :to="{name:'studentc'}">Student C</router-link>
    </div>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'StudentComponent'
}
</script>

<style>

</style>