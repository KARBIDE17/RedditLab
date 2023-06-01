export interface FullResult {
   data: Posts;
}

export interface Posts {
    children: SinglePost[];
}

export interface SinglePost {
    data: SinglePostData;
}

export interface SinglePostData {
    title: string;
    url: string;
    media: {
        reddit_video: {
                fallback_url: string
        }
    }
}