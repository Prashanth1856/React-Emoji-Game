import './index.css'

// Write your code here.
const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji

  const onClickEmojiCard = () => onClickEmoji(id)

  return (
    <li className="emoji-list-items" onClick={onClickEmojiCard}>
      <button type="button" className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
