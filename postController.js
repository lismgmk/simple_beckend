import Post from "./Post.js";
import PostService from "./postService.js"

class PostController {
    async create(req, res) {
        try {
            console.log(req.files)
            const post = await PostService.createPost(req.body, req.files.picture)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAllPosts()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const getId = await PostService.getOne(req.params.id)
            return res.json(getId)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updateOne(req, res) {
        try {
            const updatePost = await PostService.updateOnePost(req.body)
            return res.json(updatePost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async deleteOne(req, res) {
        try {
            const deletedPost = await PostService.deleteOnePost(req.params.id)
            res.json(deletedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }


}

export default new PostController()