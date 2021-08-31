export class Project{
    constructor(
        public title: string,
        public description: string,
        public image:{ path: string, desc: string},
        public techStack: { path: string, desc: string}[],
        public projectLink: string){}
}