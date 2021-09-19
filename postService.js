import Post from "./Post.js";
import filesService from "./filesService.js"

class PostService {

    async createPost(post, picture) {
        const pictureName = filesService.saveFile(picture)
        const createdPosts = await Post.create({...post, picture: pictureName})
        return createdPosts
    }

    async getAllPosts() {
        const getPosts = await Post.find()
        return getPosts
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Id не указан")
        }
        const getId = await Post.findById(id)
        return getId
    }

    async updateOnePost(post) {
        const id = post._id
        if (!id) {
            throw new Error("Id не указан")
        }
        const updatePost = await Post.findByIdAndUpdate(id, post, {new: true})
        return updatePost
    }

    async deleteOnePost(id) {
        if (!id) {
            throw new Error("Id не указан")
        }
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost
    }
}

export default new PostService()