<template>
    <v-sheet
        class="mx-auto"
        color="white"
        height="150"
        width="450"
        id="quoteContainer"
    >
        <p class="quote" id="saying">"{{ currentQuote.saying }}"</p>
<!--        <p>"Do or do not, there is no try."</p>-->
<!--        -->
        <p class="quote" id="author">{{ currentQuote.author }}, {{ currentQuote.dateOfOrigin }}</p>
<!--        <p>Master Yoda, 3 ABY</p>-->
<!--        -->
    </v-sheet>
</template>

<script>
import quoteList from '@/util/QuotesOfTheMonth'

export default {
    name: 'QuoteOfTheMonth',
    data: () => ({
        currentQuote: null,
        quoteList,
    }),
    beforeMount() {
        this.currentQuote = this.quoteList[new Date().getMonth()];
    },
}
</script>

<style scoped>
#quoteContainer {
    align-content: center;
    display: flex;
    flex-flow: row wrap;
}

.quote {
    text-align: center;
    width: 100%;
    margin: 0.5em;
}

#saying {
    font-style: italic;
    font-size: larger;
    font-weight: 200;
}

#author {
}
</style>