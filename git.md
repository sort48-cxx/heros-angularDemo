1、git init

2、git add src（这个src意思是添加src目录下的所有文件，有些会说add ..    那就是提交工程下的所有文件，在这我只拿src目录说明，这个时候如果输入 git status 就可以看到要提交的文件变成了黄色，前面还有一个new file）

3、git commit -am "first commit"   (提交到本地仓库)

4、git remote add origin XXX（XXX就是你github或者码云等远程仓库的地址，git branch这个命令可以看到你所在的分支）

5、git pull （拉取远程分支信息）

6、git push -u -f origin master(提交到远程仓库，这个命令中的 -f 是强制推送，因为远程仓库只有初始化的文件，所以强制推送上去就行了，不加-f 会报当前分支没有远程分支 新，强制推送可以覆盖master，这样就完成了第一次提交的步骤)


查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>