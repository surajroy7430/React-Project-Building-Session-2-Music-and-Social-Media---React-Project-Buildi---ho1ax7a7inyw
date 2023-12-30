import React, { useState } from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Divider,
    Button,
    IconButton,
    Typography,
    useTheme,
    useMediaQuery,
    List,
    ListItem,
    ListItemText,
    Input,
    Box,
    Dialog,
} from "@mui/material";
import { EditNote, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { fetchComments } from '../../../utils/Apis';

const Post = (props) => {
    const { 
        _id, 
        title,
        author: { profileImage, name },
        channel: { image, name: channelName },
        content,
        likeCount,
        commentCount, 
    } = props;

    const token = localStorage.getItem("authToken");
    const [like, setLike] = useState(likeCount);
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState(commentCount);
    const [fetchedComment, setFetchedComment] = useState([]);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const theme = useTheme();
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate();

    const handleLikes = async () => {
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    }

    const [isCommenting, setIsCommenting] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const fetchCommentsData = async() => {
      setIsCommentModalOpen(true);
      try {
        const commentsData = await fetchComments(_id, token);
  
        setFetchedComment(commentsData);
        console.log('setFetchedComment', setFetchedComment);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    const handleCommentInputChange = (e) => {
      setNewComment(e.target.value);
    };
    const handleAddComment = () => {
      if (newComment.trim() !== "") {
        const updatedCommentList = [newComment, ...commentList];
        setCommentList(updatedCommentList);
        setComment(comment+1);
        setNewComment(""); // Clear the input field
      }
    };

  return (
    <Card elevation={0} id="post">
      <CardHeader
        avatar={
          <Avatar src={profileImage} alt='' />
        }
        title={<span className="userPostName">{name}</span>}
        subheader={
          <span className='subheader'>
            @<span className='subheader1'>{name.split(' ').join('').toLowerCase()}</span>
          </span>
        }
      />
      <CardContent>
        <Typography variant="body2" className='postTitle'>
          {title}
        </Typography>
      </CardContent>

      <Divider /> 

      <CardHeader
        avatar={
          <Avatar src={image} alt='' />
        }
        title={<span className="userPostName">{channelName}</span>}
        // subheader="Fri Sep 01 2023"
      />
      <CardContent>
        <Typography variant="body2" className='postContent'>
          {content}
        </Typography>
      </CardContent>

      <CardContent sx={{display: 'flex', gap: '50px'}}>
        <Typography color="white" className="likesCount">
          {like > 0 ? `${like} liked` : null}
        </Typography>
        <Typography color="white" className="commentsCount" onClick={fetchCommentsData}>
          {comment > 0 ? `${comment} comments` : null}
        </Typography>
      </CardContent>

      {like || comment > 0 ? <Divider /> : null }
      <CardActions sx={{gap: '50px'}}>
        <Button sx={{ color: "white" }} aria-label="like" onClick={handleLikes}>
          <Checkbox
            icon={<ThumbUpOutlined sx={{ color: "white" }} />}
            checkedIcon={<ThumbUp sx={{ color: "white" }} />}
            checked={isLiked}
            onChange={handleLikes}
          /> Like
        </Button>
        <Button sx={{ color: "white" }} aria-label="comment" onClick={() => setIsCommenting(!isCommenting)}>
          <EditNote />&nbsp;Comment
        </Button>
      </CardActions>

      {/* fetched comment dialog open */}
      <Dialog
        open={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 400, backgroundColor: 'black', p: 3 }}>
          <Typography variant="h6" id="modal-modal-title" sx={{color: '#8a8a8a'}}>
            Comments
          </Typography>
          <List>
            {fetchedComment.map((comment, index) => (
              <ListItem key={index}>
                <Avatar sx={{backgroundColor: '#8a8a8a', color: '#b9b9b9' }} />
                <ListItemText>
                  <Typography 
                    sx={{marginLeft: '10px', color: '#8a8a8a'}}
                  >{comment.content}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
      {/* fetched comment dialog close */}

      {isCommenting && (
        <CardContent>
          <Typography variant="div" style={{ margin: "5px 0", display: 'flex' }}>
            <Input
              value={newComment}
              onChange={handleCommentInputChange}
              placeholder="Write a comment..."
              fullWidth
              sx={{color: 'white'}}
            />
            <Button 
              onClick={handleAddComment} 
              variant="contained"
              sx={{ marginTop: "10px", color: 'white', backgroundColor: '#25d1da' }}
            >
              Comment
            </Button>
          </Typography>
        </CardContent>
      )}
      {commentList.length > 0 && (
        <CardContent>
          <Divider sx={{marginBottom: '5px'}} />
          <List sx={{marginLeft: '15px'}}>
            {commentList.map((comment, i) => (
              <ListItem key={i}>
                {/* <Avatar src={user && user.profileImage} alt=''  /> */}
                <ListItemText sx={{marginLeft: '10px'}}>
                  {/* <Typography sx={{fontWeight: '600'}}>{user && user.name}</Typography> */}
                  <Typography>{comment}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      )}
    </Card>
  )
}

export default Post
