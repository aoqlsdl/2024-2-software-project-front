import { atom } from 'recoil'

export const dataState = atom({
    key: 'dataState',
    default: {
        major: '',
        doubleMajorList: [] as Array<{ major: string }>,
        helpType: '',
        classTimeList: [] as Array<{ timeId: string }>,
    },
})
