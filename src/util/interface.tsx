export interface postType {
    title: string, 
    pubDate: Date, 
    description: string, 
    author: string, 
    images: Array<ImageType | string>, 
    tags: Array<TagType | string>, 
    body: HTMLElement | string, 
}

export type ImageType = string; 

export type TagType = string;