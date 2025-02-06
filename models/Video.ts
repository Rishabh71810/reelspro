import mongoose ,{Schema, model,models} from "mongoose";


export const VIDEODIMENTIONS = {
    width: 1000,
    height:1920
} as const ;

export interface IVideo {
    videoUrl: string;
    title: string;
    description: string;
    _id?: mongoose.Types.ObjectId;
    controls?: boolean;
    thumbnail?: string;
    createdAt?: Date;
    updatedAt?: Date;
    transformations?:{
        height: number;
        width: number;
        quality?: number;
    }
}

const vidoeSchema = new Schema<IVideo>({
  title:{
        type: String,
        required: true,
  },
  description:{
        type: String,
        required: true,
  },
    videoUrl:{
            type: String,
            required: true,
    },
    thumbnail:{
        type: String,
    },
    controls:{
        type: Boolean,
        default: true,
    },
    transformations:{
        height: {
            type: Number,
            default: VIDEODIMENTIONS.height,
        },
        width:{
            type: Number,
            default: VIDEODIMENTIONS.width,
        },
        quality:{
            type: Number,
            default: 100,
        }
    }
},{
    timestamps:true,
}
)

const Video = models.Video || model<IVideo>("Video", vidoeSchema);

export default Video;