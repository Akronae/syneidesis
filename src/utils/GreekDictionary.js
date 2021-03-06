import GreekGrammar, { Cases } from '@/utils/GreekGrammar'
import GreekDeclensionNounTables from '@/utils/GreekDeclensionNounTables'
import GreekDeclensionVerbTables from './GreekDeclensionVerbTables'
import GreekArticles from './GreekArticles'
import GreekPersonalPronoun from './GreekPersonalPronoun'
import GreekPronouns, { GreekPronoun } from './GreekPronouns'
import EnglishPersonalPronoun from './EnglishPersonalPronoun'
import GreekDeclensionTableNoun from './GreekDeclensionTableNoun'
import EnglishPronouns, { EnglishPronoun } from './EnglishPronouns'

export class GreekDictionaryEntry
{
    /**
     * @type {import("@/utils/GreekGrammar").GENDERS}
     */
    gender
    /**
     * @type {GreekDeclensionTableNoun}
     */
    declensionNounTable
    /**
     * @type {GreekDeclensionVerbTables.Table}
     */
    declensionVerbTable
    /**
     * @type {import('./GreekArticles').GreekArticle}
     */
    articleTable
    /**
     * @type {GreekPersonalPronoun}
     */
    personalPronounTable
    /**
     * @type {GreekPronoun}
     */
    pronounTable
    /**
     * @type {import("@/utils/GreekGrammar").PARTS_OF_SPEECH}
     */
    pos
    /**
     * @type {import('@/utils/GreekGrammar').Cases<string>|string|EnglishPersonalPronoun|EnglishPronoun}
     */
    translation

    /**
     * @param {Object} args
     * @param {string} [args.lemma]
     * @param {import('@/utils/GreekGrammar').GENDERS} [args.gender]
     * @param {GreekDeclensionTableNoun} [args.declensionNounTable]
     * @param {GreekDeclensionVerbTables.Table} [args.declensionVerbTable]
     * @param {import('./GreekArticles').GreekArticle} [args.articleTable]
     * @param {GreekPronoun} [args.pronounTable]
     * @param {GreekPersonalPronoun} [args.personalPronounTable]
     * @param {import('@/utils/GreekGrammar').PARTS_OF_SPEECH} [args.pos]
     * @param {import('@/utils/GreekGrammar').Cases<string>|string|EnglishPersonalPronoun|EnglishPronoun} [args.translation]
     */
    constructor ({gender = null, declensionNounTable = null, declensionVerbTable = null, articleTable = null, personalPronounTable = null, pronounTable = null, pos = null, translation = null} = {})
    {
        this.gender = gender
        this.declensionNounTable = declensionNounTable
        this.declensionVerbTable = declensionVerbTable
        this.articleTable = articleTable
        this.personalPronounTable = personalPronounTable
        this.pronounTable = pronounTable
        this.pos = pos
        this.translation = translation
    }
}

export default class GreekDictionary
{
    /**
     * @type {typeof GreekDictionaryEntry}
     */
    static Entry_Type = GreekDictionaryEntry
    static Entry = new GreekDictionaryEntry()

    static DICTIONARY =
    {
        '?????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.OS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'book' }),
        get '?????????????' () { return GreekDictionary.get('?????????????') },
        '???????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables.IS_EWS, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'origin' }),
        get '?????????????????' () { return GreekDictionary.get('???????????????') },
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.OUS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yesu' }),
        '???????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.OS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Christ' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.OS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'son' }),
        '?????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Abraham' }),
        get '??????????????' () { return GreekDictionary.get('?????????????') },
        '???????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.INDECLINABLE, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'David' }),
        '?????????????': new GreekDictionaryEntry({ declensionVerbTable: GreekDeclensionVerbTables.W, pos: GreekGrammar.PARTS_OF_SPEECH.VERB, translation: 'to beget' }),
        '???': new GreekDictionaryEntry({ articleTable: GreekArticles.DEFINITE, pos: GreekGrammar.PARTS_OF_SPEECH.ARTICLE, translation: 'the' }),
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yishaq' }),
        '?????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.CONJUNCTION, translation: 'then' }),
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yaaqob' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.AS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yehuda' }),
        '???????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.CONJUNCTION, translation: 'and' }),
        '????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.OS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'brother' }),
        '????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, pos: GreekGrammar.PARTS_OF_SPEECH.PERSONAL_PRONOUN, personalPronounTable: GreekPersonalPronoun, translation: EnglishPersonalPronoun }),
        '???????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Phares' }),
        '???????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Thamar' }),
        '?????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Zerah' }),
        '?????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PREPOSITION, translation: new Cases({ genitive: 'from' }) }),
        get '?????' () { return GreekDictionary.get('?????') },
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Hezron' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Aram' }),
        '??????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Amminadab' }),
        '???????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Nahshon' }),
        '?????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Salmon' }),
        '?????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Boaz' }),
        get '?????????' () { return GreekDictionary.get('?????????') },
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Rahab' }),
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.INDECLINABLE, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Obed' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Rut' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yishai' }),
        '?????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.EUS_EWS, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'king' }),
        '???????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.WN_WNOS, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Selomo' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.AS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Urias' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Rehoboam' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Abiyya' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Asa' }),
        '????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yehosapat' }),
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Joram' }),
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.AS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Uzziah' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Joatham' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Ahaz' }),
        '????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.AS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Hezekiah' }),
        '?????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.HS_H, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Manasse' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Amos' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.AS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yosiyya' }),
        '??????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.AS_OU, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Jechoniah' }),
        '????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PREPOSITION, translation: new Cases({genitive: 'on', dative: 'afer', accusative: 'for'}) }),
        get '????????' () { return GreekDictionary.get('????????') },
        '?????????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables.A_AS, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'deportation' }),
        '???????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.WN_WNOS, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Babylon' }),
        '?????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PREPOSITION, translation: new Cases({genitive: 'with', dative: 'among', accusative: 'after'}) }),
        '?????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Shealtiel' }),
        '???????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Zerubbabel' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Abiud' }),
        '????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Eliakim' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Azor' }),
        '???????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Zadok' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Achim' }),
        '??????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Eliud' }),
        '????????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Elazar' }),
        '?????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Matthan' }),
        '????????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.SEMITIC_PROPER_NAME, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Yosep' }),
        '??????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.HR_EROS, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'man' }),
        get '??????????' () { return GreekDictionary.get('??????????') },
        '???????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables.A_AS, pos: GreekGrammar.PARTS_OF_SPEECH.PROPER_NOUN, translation: 'Maryam' }),
        [GreekPronouns.RELATIVE.singular.masculine.nominative[0]]: new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PRONOUN, pronounTable: GreekPronouns.RELATIVE, translation: EnglishPronouns.RELATIVE }),
        '?????????': new GreekDictionaryEntry({ declensionVerbTable: GreekDeclensionVerbTables.W, pos: GreekGrammar.PARTS_OF_SPEECH.VERB, translation: 'to say' }),
        '???????': new GreekDictionaryEntry({ declensionNounTable: GreekDeclensionNounTables.S_OS, pos: GreekGrammar.PARTS_OF_SPEECH.ADJECTIVE, translation: 'all' }),
        '???????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.CONJUNCTION, translation: 'therefore' }),
        '???????????': new GreekDictionaryEntry({ gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables.A_AS, pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, translation: 'generation' }),
        '????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PREPOSITION, translation: new Cases({ genitive: 'from' }) }),
        '???????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.CONJUNCTION, translation: 'until' }),
        '???????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.ADVERB, translation: 'thus' }),
        '??????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to be' }),
        '?????????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to engage' }),
        '???????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, gender: GreekGrammar.GENDERS.FEMININE, declensionNounTable: GreekDeclensionNounTables._OS, translation: 'mother' }),
        '?????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.ADVERB, translation: 'before' }),
        '???': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.CONJUNCTION, translation: 'or' }),
        '???????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to come' }),
        '?????????????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to come [together]' }),
        '????????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to find' }),
        '?????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PREPOSITION, translation: new Cases({ dative: 'in', genitive: 'inside' }) }),
        '?????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, declensionNounTable: GreekDeclensionNounTables.HR_EROS, translation: 'stomach' }),
        get '?????????????' () { return GreekDictionary.get('?????????????') },
        '???????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to have' }),
        '?????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, declensionNounTable: GreekDeclensionNounTables.A_ATOS, translation: 'spirit' }),
        '???????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.ADJECTIVE, declensionNounTable: GreekDeclensionNounTables.OS_OU, translation: 'holy' }),
        '???????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.ADJECTIVE, declensionNounTable: GreekDeclensionNounTables.OS_OU, translation: 'righteous' }),
        '?????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PARTICLE, translation: 'not' }),
        get '?????' () { return GreekDictionary.get('?????') },
        '?????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to wish' }),
        '?????????????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to make an example of' }),
        '?????????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to will' }),
        '????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.ADVERB, translation: 'secretly' }),
        '??????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to release' }),
        '??????????????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to concentrate' }),
        '??????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to look' }),
        [GreekPronouns.DEMONSTRATIVE.singular.masculine.nominative[0]]: new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PRONOUN, pronounTable: GreekPronouns.DEMONSTRATIVE, translation: EnglishPronouns.DEMONSTRATIVE }),
        '???????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, gender: GreekGrammar.GENDERS.MASCULINE, declensionNounTable: GreekDeclensionNounTables.OS_OU, translation: 'messenger' }),
        '?????????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, declensionNounTable: GreekDeclensionNounTables.OS_OU, translation: 'lord' }),
        '?????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.PREPOSITION, translation: new Cases({ genitive: 'against', accusative: 'through' }) }),
        get '?????????' () { return GreekDictionary.get('?????????') },
        '?????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.NOUN, gender: GreekGrammar.GENDERS.NEUTER, declensionNounTable: GreekDeclensionNounTables.INDECLINABLE, translation: 'dream' }),
        '???????????': new GreekDictionaryEntry({ pos: GreekGrammar.PARTS_OF_SPEECH.VERB, declensionVerbTable: GreekDeclensionVerbTables.W, translation: 'to appear' }),
    }

    /**
     * @param {string} lemma 
     * @returns {GreekDictionaryEntry}
     */
    static get (lemma)
    {
        return this.DICTIONARY[lemma]
    }
}