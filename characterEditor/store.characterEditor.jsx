import { makeAutoObservable } from "mobx"


class CharacterEditorStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state = {
        input_editor_face: [
            { name: 'Высота бровей', value: 0 },
            { name: 'Глубина бровей', value: 0 },
            { name: 'Высота скул', value: 0 },
            { name: 'Ширина скул', value: 0 },
            { name: 'Глубина щеки', value: 0 },
            { name: 'Ширина челюсти', value: 0 },
            { name: 'Форма челюсти', value: 0 },
            { name: 'Высота подбородка', value: 0 },
            { name: 'Ширина подбородка', value: 0 },
            { name: 'Глубина подбородка', value: 0 },
            { name: 'Подбородочный отступ', value: 0 },
            { name: 'Обхват шеи', value: 0 },
        ],
        input_editor_nose: [
            { name: 'Ширина носа', value: 0 },
            { name: 'Высота носа', value: 0 },
            { name: 'Длина кончика носа', value: 0 },
            { name: 'Высота кончика носа', value: 0 },
            { name: 'Глубина моста носа', value: 0 },
            { name: 'Поломаность носа', value: 0 },
        ],

        input_editor_eyes_lips: [
            { name: 'Эпикантус', value: 0 },
            { name: 'Толщина губ', value: 0 },
        ],
        input_editor_face_last: [
            { title: "Причёска", maxVal: 72, index_help: 1 },
            { title: "Стиль причёски", maxVal: 72, index_help: 0 },
            { title: "Цвет волос", maxVal: 64, index_help: 0 },
            { title: "Мелирование волос", maxVal: 64, index_help: 0 },
            { title: "Брови", maxVal: 31, index_help: 0 },
            { title: "Цвет бровей", maxVal: 64, index_help: 0 },
            { title: "Цвет глаз", maxVal: 32, index_help: 0 },
            { title: "Веснушки", maxVal: 17, index_help: 0 },
        ],
        cheked_sex: false,
        slider: [
            {
                title: "Мать",
                parents: ["Дарлин", "Обри", "Жасмин", "Жизель", "Амелия", "Изабелла", "Зои", "Ава", "Камилла", "Вайолет", "София", "Эйлин", "Николь", "Эшли", "Грейс", "Брианна", "Натали", "Оливия", "Элизабет", "Кэтрин", "Эмма", "Мисти"],
                index_help: 0
            },
            {
                title: "Отец",
                parents: ["Бенджамин", "Эллиот", "Эдвард", "Ной", "Андре", "Джоан", "Алекс", "Исаак", "Эвон", "Итон", "Винсент", "Анжел", "Диего", "Адриан", "Габриель", "Майкл", "Сантьяго", "Кевин", "Луис", "Самюэль", "Энтони", "Клайд", "Нико", "Джон"],
                index_help: 0
            },
            { title: "Сходство", index_help: 10 },
            { title: "Кожа", index_help: 10 }
        ],
        stats_parents: [[ //22
            { endurance: 5, strength: 15, shooting: 10, stealth: 25, flying: 45, driving: 5, psychics: 5 },
            { endurance: 15, strength: 25, shooting: 50, stealth: 15, flying: 10, driving: 40, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 20, flying: 50, driving: 5, psychics: 15 },
            { endurance: 50, strength: 10, shooting: 15, stealth: 25, flying: 45, driving: 20, psychics: 50 },
            { endurance: 25, strength: 30, shooting: 35, stealth: 5, flying: 20, driving: 30, psychics: 45 },
            { endurance: 30, strength: 40, shooting: 35, stealth: 50, flying: 15, driving: 25, psychics: 50 },
            { endurance: 30, strength: 50, shooting: 35, stealth: 5, flying: 25, driving: 30, psychics: 50 },
            { endurance: 45, strength: 10, shooting: 20, stealth: 30, flying: 40, driving: 15, psychics: 50 },
            { endurance: 10, strength: 35, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 20 },
            { endurance: 15, strength: 35, shooting: 35, stealth: 10, flying: 10, driving: 35, psychics: 40 },
            { endurance: 35, strength: 35, shooting: 25, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 20, strength: 40, shooting: 45, stealth: 5, flying: 15, driving: 10, psychics: 35 },
            { endurance: 25, strength: 45, shooting: 5, stealth: 50, flying: 20, driving: 35, psychics: 50 },
            { endurance: 10, strength: 20, shooting: 5, stealth: 20, flying: 5, driving: 50, psychics: 10 },
            { endurance: 40, strength: 5, shooting: 30, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 10, strength: 10, shooting: 20, stealth: 35, flying: 35, driving: 20, psychics: 30 },
            { endurance: 40, strength: 30, shooting: 25, stealth: 35, flying: 35, driving: 20, psychics: 50 },
            { endurance: 20, strength: 25, shooting: 45, stealth: 10, flying: 15, driving: 35, psychics: 50 },
            { endurance: 25, strength: 15, shooting: 20, stealth: 10, flying: 40, driving: 15, psychics: 25 },
            { endurance: 50, strength: 20, shooting: 15, stealth: 25, flying: 45, driving: 10, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 35, flying: 50, driving: 5, psychics: 30 },
            { endurance: 15, strength: 30, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 15 },
        ], [ //24
            { endurance: 25, strength: 15, shooting: 20, stealth: 10, flying: 40, driving: 15, psychics: 25 },
            { endurance: 20, strength: 25, shooting: 45, stealth: 10, flying: 15, driving: 35, psychics: 50 },
            { endurance: 40, strength: 30, shooting: 25, stealth: 35, flying: 35, driving: 20, psychics: 50 },
            { endurance: 10, strength: 10, shooting: 20, stealth: 35, flying: 35, driving: 20, psychics: 30 },
            { endurance: 40, strength: 5, shooting: 30, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 10, strength: 20, shooting: 5, stealth: 20, flying: 5, driving: 50, psychics: 10 },
            { endurance: 25, strength: 45, shooting: 5, stealth: 50, flying: 20, driving: 35, psychics: 50 },
            { endurance: 20, strength: 40, shooting: 45, stealth: 5, flying: 15, driving: 10, psychics: 35 },
            { endurance: 35, strength: 35, shooting: 25, stealth: 40, flying: 30, driving: 25, psychics: 50 },
            { endurance: 15, strength: 35, shooting: 35, stealth: 10, flying: 10, driving: 35, psychics: 40 },
            { endurance: 10, strength: 35, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 20 },
            { endurance: 45, strength: 10, shooting: 20, stealth: 30, flying: 40, driving: 15, psychics: 50 },
            { endurance: 30, strength: 50, shooting: 35, stealth: 5, flying: 25, driving: 30, psychics: 50 },
            { endurance: 30, strength: 40, shooting: 35, stealth: 50, flying: 15, driving: 25, psychics: 50 },
            { endurance: 25, strength: 30, shooting: 35, stealth: 5, flying: 20, driving: 30, psychics: 45 },
            { endurance: 50, strength: 10, shooting: 15, stealth: 25, flying: 45, driving: 20, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 20, flying: 50, driving: 5, psychics: 15 },
            { endurance: 15, strength: 25, shooting: 50, stealth: 15, flying: 10, driving: 40, psychics: 50 },
            { endurance: 5, strength: 15, shooting: 10, stealth: 25, flying: 45, driving: 5, psychics: 5 },
            { endurance: 15, strength: 30, shooting: 5, stealth: 15, flying: 5, driving: 50, psychics: 15 },
            { endurance: 20, strength: 35, shooting: 45, stealth: 10, flying: 15, driving: 25, psychics: 50 },
            { endurance: 5, strength: 25, shooting: 10, stealth: 35, flying: 50, driving: 5, psychics: 30 },
            { endurance: 20, strength: 50, shooting: 25, stealth: 25, flying: 30, driving: 40, psychics: 50 },
            { endurance: 50, strength: 20, shooting: 15, stealth: 25, flying: 45, driving: 10, psychics: 50 },
        ]],
        stats: { endurance: 0, strength: 0, shooting: 0, stealth: 0, flying: 0, driving: 0, psychics: 0 },

        first_name: '',
        last_name: '',
        old_input: '',
        promocode: '',
        referer: '',
    }
}
export default new CharacterEditorStore()