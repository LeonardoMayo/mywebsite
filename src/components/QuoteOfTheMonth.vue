<template>
    <v-sheet
        class="mx-auto"
        color="white"
        height="150"
        width="450"
        id="quoteContainer"
    >
        <p class="quote" id="saying">„Tue es, oder tue es nicht. Es gibt kein Versuchen.“</p>
<!--        <p>"Do or do not, there is no try."</p>-->
<!--        -->
        <p class="quote" id="author">Master Yoda, 3 NSY</p>
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
        quoteList: quoteList
    }),
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