import { Request, Response } from 'express';
import Content from '../models/models.ts';

class LessonController {
  async getDataLesson(req: Request, res: Response): Promise<Response> {
    const content = await Content.findAll();
    return res.json(content);
  }

  async getDataOnePythonLesson(req: Request, res: Response): Promise<Response> {
    const content = await Content.findOne({ where: { course: 'python' } });
    return res.json(content);
  }

  async createContent(req: Request, res: Response): Promise<Response> {
    const { course, type, text, image } = req.body;
    console.log(req.body);
    const content = await Content.create({ course, type, text, image });
    return res.json(content);
  }

  async updateContent(req: Request, res: Response): Promise<Response> {
    const { course, type, text, image } = req.body;
    const idContent = req.query.id;

    const content = await Content.update(
      { course, type, text, image },
      {
        where: {
          id: idContent,
        },
      }
    );
    return res.json(content);
  }

  async deleteContent(req: Request, res: Response): Promise<Response> {
    const idContent = req.query.id;
    await Content.destroy({
      where: {
        id: idContent,
      },
    });
    return res.json({ message: 'Delete successful' });
  }
}

export default new LessonController();
