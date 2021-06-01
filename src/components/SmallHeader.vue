<template>
    <div>
        <div id="headerBar">
            <img :src="logoBunt" @click="$router.push({ name: 'home' })"/>
            <p>{{ text }}</p>
        </div>
        <p @click="$router.back()" id="goBack">{{ '< Zurück' }}</p>
    </div>
</template>

<script>
import logoBunt from '@/assets/Bilder/jpl-f02-01.png';

export default {
    name: 'SmallHeader',
    props: {
        text: { required: false, type: String }
    },
    data: () => ({
       logoBunt,
    }),
}
</script>

<style scoped lang="scss">
#headerBar {
    display: inline-flex;
    align-content: center;
    justify-content: space-around;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0;
    width: 100%;

    img {
        height: 128px;
        transform: scale(1.2);
        cursor: pointer;
    }

    p {
        color: grey;
        max-height: 2em !important;
        margin-block: auto;
    }
}

#goBack {
    text-decoration: underline;
    font-size: smaller;
    cursor: pointer;
    color: grey;

}
</style>