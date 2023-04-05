export const createUserResultObject = (user, token) => {
    return {
        bio: user.bio,
        bookmarks: user.bookmarks,
        commentedPosts: user.commentedPosts,
        coverPicture: user.coverPicture,
        createdPosts: user.createdPosts,
        email: user.email,
        followers: user.followers,
        following: user.following,
        fullName: user.fullName,
        likedPosts: user.likedPosts,
        nickname: user.nickname,
        profilePicture: user.profilePicture,
        reswirkedPosts: user.reswirkedPosts,
        _id: user._id,
        token: token
    }
}

export const getSearchedUsers = (usersArray) => {
    if (usersArray.length === 0) return [];

    const arrayResult = [];

    usersArray.forEach(user => {
        const {
            _id,
            nickname,
            followers,
            following,
            profilePicture
        } = user;

        arrayResult.push({
            _id,
            nickname,
            followers,
            following,
            profilePicture
        });
    });

    return arrayResult;
}