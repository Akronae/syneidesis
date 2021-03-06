<script>
// @ts-ignore
import MattewCorrect from '~/static/matthew-correct.json'
// @ts-ignore
import Mattew from '~/static/matthew.json'
import GreekInflectionUtils from '@/utils/GreekInflectionUtils'
import GreekGrammar from '@/utils/GreekGrammar'
import GreekParsedWord from '@/utils/GreekParsedWord'
import GreekParser from '@/utils/GreekParser'
import GreekDictionary from '@/utils/GreekDictionary'
import GreekAlphabet from '@/utils/GreekAlphabet'
import StringUtils from '@/utils/StringUtils'
import ObjectUtils from '@/utils/ObjectUtils'
import GreekIrregularNouns from '@/utils/GreekIrregularNouns'
import GreekIrregularVerbs from '@/utils/GreekIrregularVerbs'

export default
{
    name: 'home',

    async created()
    {
    },

    render () 
    {
        const matthew = Mattew.collections['New Testament']['The Book of Matthew']
        const CORRECT_UNTIL_VERSE = 19
        /**
         * @type {GreekParsedWord[][][]}
         */
        const toCorrect = Object.entries(matthew.milestones).filter(([v]) => !v.startsWith('_')).map(([_, milestone]) => Object.entries(milestone).filter(([verseNumber]) => !verseNumber.startsWith('_') && Number.parseInt(verseNumber) <= CORRECT_UNTIL_VERSE).map(([_, verse]) =>
        {
            return GreekParser.parseVerse(verse.grc)
        }))
        toCorrect.forEach(milestone => milestone.forEach(verse => verse.forEach(word => {word.definition = null; word.verbObject = null})))
        // console.log(JSON.stringify(toCorrect, null, 2))
        MattewCorrect.forEach((milestone, milestoneIndex) => milestone.forEach((verse, verseIndex) => verse.forEach((word, wordIndex) =>
        {
            const IGNORED_ERRORS = []
            if (verseIndex > CORRECT_UNTIL_VERSE - 1) return
            const wordTest = toCorrect[milestoneIndex][verseIndex][wordIndex]
            const wordPathes = ObjectUtils.getValuesPathes(word)
            for (const [path, val] of Object.entries(wordPathes))
            {
                const testVal = ObjectUtils.get(wordTest, path)
                    // console.log(testVal, val)

                if (testVal !== val)
                {
                    const error = `Matthew ${milestoneIndex}:${verseIndex}:${wordIndex} ${wordTest.word}, ${path}: '${testVal}' should be '${val}'`
                    if (!StringUtils.includesSome(error, ...IGNORED_ERRORS)) console.error(error)
                }
            }
        })))
        Object.entries(GreekInflectionUtils.DICTIONARY_INFLECTED).forEach(([word, def]) =>
        {
            if (word != GreekAlphabet.sanitizeLetters(word)) console.error(`'${word}' is not sanitized, should be '${GreekAlphabet.sanitizeLetters(word)}'`)
        })
        Object.entries(GreekIrregularNouns.DICTIONARY).forEach(([word, def]) =>
        {
            if (word != GreekAlphabet.sanitizeLetters(word)) console.error(`'${word}' is not sanitized, should be '${GreekAlphabet.sanitizeLetters(word)}'`)
        })
        Object.entries(GreekIrregularVerbs.DICTIONARY).forEach(([word, def]) =>
        {
            if (word != GreekAlphabet.sanitizeLetters(word)) console.error(`'${word}' is not sanitized, should be '${GreekAlphabet.sanitizeLetters(word)}'`)
        })
        Object.entries(GreekDictionary.DICTIONARY).forEach(([word, def]) =>
        {
            if (word != GreekAlphabet.sanitizeLetters(word)) console.error(`'${word}' is not sanitized, should be '${GreekAlphabet.sanitizeLetters(word)}'`)
        })
        
        /**
         * @type {GreekParsedWord[][]}
         */
        const parsed = Object.entries(matthew.milestones[this.chapter]).filter(([verseNumber]) => !verseNumber.startsWith('_')).map(([verseNumber, verse]) =>
        {
            return GreekParser.parseVerse(verse.grc)
        })
        window.parsed = parsed

        return (
            <div id='home-view'>
                <div class='title'>{matthew.name.en}</div>
                {
                    parsed.map(verseWords => (
                        <div class='verse'>
                        <div class='verse-number'>{matthew.shortName.en} {1}:{parsed.indexOf(verseWords) + 1}</div>
                        <div class='verse-translation'>{matthew.milestones[this.chapter][parsed.indexOf(verseWords) + 1].en}</div>
                        <div class='verse-text'>
                        {
                            verseWords.map(parsedWord =>
                            {
                                const {word, declension, definition, translation} = parsedWord
                                if (word == 'δεκατέσσαρες,') console.log(parsedWord)

                                return (
                                    <div class={{'verse-word': true, ['case-' + declension.case]: true, ['pos-' + definition.pos]: true, 'def-missing': !definition.translation}}>
                                        <div class='verse-word-text'>{word}</div>
                                        {
                                            declension &&
                                            [
                                                <div class='verse-word-translation'>
                                                    {translation}
                                                </div>,
                                                <div class='verse-word-declension'>
                                                    {definition && definition.pos && <div>{GreekInflectionUtils.shortenDeclensionString(definition.pos)}</div> }
                                                    <div v-show={definition && StringUtils.equalsSome(definition.pos, GreekGrammar.PARTS_OF_SPEECH.NOUN, GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, GreekGrammar.PARTS_OF_SPEECH.ADJECTIVE)} class='column align-center'>
                                                        {GreekInflectionUtils.shortenDeclensionString(`${declension.case || ''}-${declension.number || ''}-${declension.gender || ''}`)}
                                                    </div>
                                                    <div v-show={definition && definition.pos == GreekGrammar.PARTS_OF_SPEECH.VERB} class='column align-center'>
                                                        <div>{GreekInflectionUtils.shortenDeclensionString(`${declension.tense || ''}-${declension.voice || ''}-${declension.mood || ''}`)}</div>
                                                        <div> {GreekInflectionUtils.shortenDeclensionString(`${declension.person || declension.gender || ''}-${declension.number || ''}`)}</div>
                                                    </div>
                                                    <div v-show={definition && definition.pos == GreekGrammar.PARTS_OF_SPEECH.ARTICLE} class='column align-center'>
                                                        <div>{GreekInflectionUtils.shortenDeclensionString(`${declension.case || ''}-${declension.number || ''}-${declension.gender || ''}`)}</div>
                                                    </div>
                                                    <div v-show={definition && definition.pos == GreekGrammar.PARTS_OF_SPEECH.PERSONAL_PRONOUN} class='column align-center'>
                                                        <div>{GreekInflectionUtils.shortenDeclensionString(`${declension.person || ''} pers`)}</div>
                                                        <div>{GreekInflectionUtils.shortenDeclensionString(`${declension.case || ''}-${declension.number || ''}-${declension.gender || ''}`)}</div>
                                                    </div>
                                                    <div v-show={definition && definition.pos == GreekGrammar.PARTS_OF_SPEECH.PRONOUN} class='column align-center'>
                                                        <div>{GreekInflectionUtils.shortenDeclensionString(`${declension.case || ''}-${declension.number || ''}-${declension.gender || ''}`)}</div>
                                                    </div>
                                                    <div v-show={definition && definition.pos == GreekGrammar.PARTS_OF_SPEECH.PREPOSITION} class='column align-center'>
                                                        <div>{GreekInflectionUtils.shortenDeclensionString(`(+${declension.case || ''})`)}</div>
                                                    </div>
                                                </div>,
                                            ]
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    },

    data () 
    {
        return {
            chapter: 1
        }
    },

    computed:
    {
    },

    async mounted ()
    {
    },

    methods:
    {
    },

    components:
    {
    }
}
</script>

<style lang='less'>
@import '~@/styles/main.less';

#home-view
{
    padding: 40px;

    .verse
    {
        &:not(&:first-of-type)
        {
            margin-top: 50px;
        }

        .verse-translation
        {
            background-color: var(--theme-border-color-mega-light);
            border-radius: 10px;
            padding: 5px 10px;
            width: fit-content;
            color: var(--theme-border-color-extra-strong);
            margin-top: 10px;
        }

        .verse-text
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .verse-word
            {
                padding: 10px;
                border-radius: 10px;
                background-color: var(--theme-border-color-extra-light);
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 10px;

                &:not(:last-of-type)
                {
                    margin-right: 10px;
                }

                &.pos-verb
                {
                    background-color: var(--theme-verb-color);
                }
                &.def-missing
                {
                    background-color: var(--theme-missing-color);
                }
                &.case-nominative
                {
                    background-color: var(--theme-nominative-color);
                }
                &.case-genitive
                {
                    background-color: var(--theme-genitive-color);
                }
                &.case-accusative
                {
                    background-color: var(--theme-accusative-color);
                }
                &.case-dative
                {
                    background-color: var(--theme-dative-color);
                }
                &.case-vocative
                {
                    background-color: var(--theme-vocative-color);
                }

                .verse-word-text
                {
                    font-family: 'Source Sans 3';
                }

                .verse-word-translation
                {
                    margin-top: 5px;
                    font-size: 80%;
                }

                .verse-word-declension
                {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 70%;
                    margin-top: 5px;
                    color: var(--theme-text-color-extra-light);
                    width: max-content;
                }
            }
        }
    }
}
</style>
