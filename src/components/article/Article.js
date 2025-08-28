import './Article.css';

function Article(props) {
    let {title, content} = props;
    return
    (
        <article>
            <h1 style={{color:"darkblue", fontSize:"48px"}}>{title}</h1>
            {content}
        </article>
    )
}

Article.defaultProps = {
    title:  `Заголовок статьи`,
    content:`Содержимое статьи`
};

export default Article;