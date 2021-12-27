const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    createFriend,
    updateUser,
    deleteFriend,
    deleteUser
} = require('../../controllers/User-controller');

// /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(createFriend)
    .delete(deleteFriend);

module.exports = router;