import mongoose, { Schema, Model, Document } from "mongoose";
interface IComment extends Document {
  user: object;
  comment: string;
}
interface IReview extends Document {
  user: object;
  rating: number;
  comment: string;
}

interface ILink extends Document {
  title: string;
  url: string;
}

interface ICourseData extends Document {
  title: string;
  description: string;
  vedioUrl: string;
  vedioThumbnail: object;
  vedioSection: string;
  vedioLength: number;
  links: ILink[];
  suggestion: string;
  questions: IComment[];
}

interface ICourse extends Document {
    name: string;
    description?: string;
    price: number;
    estimatedPrice?: number;
    thumbnail: object;
    tags: string;
    level: string;
    demoUrl: string;
    benefits:{title:string}[];
    prerequisites: {title:string}[];
    courseData: ICourseData[];
    ratings?: number;
    purchased?: number;

}

const reviewSchema: Schema<IReview> = new Schema({
user: Object,
rating: { type: Number,default: 0 },
comment: String,

})

const linkSchema: Schema<ILink> = new Schema({
title: String,
url: String
})

const commentSchema: Schema<IComment> = new Schema({
user: Object,
comment: String,

})