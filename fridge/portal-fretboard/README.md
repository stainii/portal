# portal-fretboard
[![Build Status](https://server.stijnhooft.be/jenkins/buildStatus/icon?job=portal-fretboard/master)](https://server.stijnhooft.be/jenkins/job/portal-fretboard/job/master/)

A quiz, training me to remember the position of notes on a guitar fretboard.

### Release
#### How to release
To release a module, this project makes use of the JGitflow plugin and the Dockerfile-maven-plugin.

1. Make sure all changes have been committed and pushed to Github.
1. Switch to the dev branch.
1. Make sure that the dev branch has at least all commits that were made to the master branch
1. Make sure that your Maven has been set up correctly (see below)
1. Run `mvn jgitflow:release-start -Pproduction`.
1. Run `mvn jgitflow:release-finish -Pproduction`.
1. In Github, mark the release as latest release.
1. Congratulations, you have released both a Maven and a Docker build!

More information about the JGitflow plugin can be found [here](https://gist.github.com/lemiorhan/97b4f827c08aed58a9d8).

##### Maven configuration
At the moment, releases are made on a local machine. No Jenkins job has been made (yet).
Therefore, make sure you have the following config in your Maven `settings.xml`;

````$xml
<servers>
		<server>
			<id>docker.io</id>
			<username>your_username</username>
			<password>*************</password>
		</server>
		<server>
			<id>portal-nexus-releases</id>
			<username>your_username</username>
            <password>*************</password>
		</server>
	</servers>
````
* docker.io points to the Docker Hub.
* portal-nexus-releases points to my personal Nexus (see `<distributionManagement>` in the project's `pom.xml`)
