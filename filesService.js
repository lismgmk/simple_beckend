import {nanoid} from 'nanoid';
import * as path from "path"

class FilesService {

    saveFile(file) {
        try {
            const fileName = nanoid() + '.jpg'
            const filePath = path.resolve("static", fileName);
            file.mv(filePath)
            return fileName
        } catch (e) {
            console.log(e)
        }
    }


}

export default new FilesService()