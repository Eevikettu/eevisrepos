# set user name, pw
git config user.email kettunen.eevi@gmail.com
git config user.name Eevikettu

# add to ssh agent
# ssh-add ~/.ssh/eevi_github_rsa
ssh-add ~/.ssh/*

# reset agent
ssh -vT git@github.com
