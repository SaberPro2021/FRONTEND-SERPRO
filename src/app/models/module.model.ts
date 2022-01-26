import { IcfesTest } from './test.model';

export class IcfesModule {
    // moduleId: number;
    _id: string;
    // id del modulo
    icfesModule: number;
    knowledgeArea: string;
    description: string;
    evaluationSubject: string;
    testsList: IcfesTest [];
}