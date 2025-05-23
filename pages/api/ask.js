import manual from '../../data/manual.json';

export default function handler(req, res) {
  const { question } = req.body;
  const matched = manual.find(item => question.includes(item.question.slice(0, 4)));
  const answer = matched ? matched.answer : '暂时没有找到相关信息，请联系客服或稍后再试。';
  res.status(200).json({ answer });
}
