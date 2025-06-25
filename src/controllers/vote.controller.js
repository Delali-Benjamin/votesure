const prisma = require("../config/prisma");

exports.castVote = async (req, res) => {
  const { candidateId, electionId } = req.body;
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (user.hasVoted) {
      return res.status(400).json({ message: "You have already voted." });
    }

    // Create vote record
    await prisma.vote.create({
      data: {
        userId,
        candidateId,
        electionId,
      },
    });

    // Update user's hasVoted flag
    await prisma.user.update({
      where: { id: userId },
      data: { hasVoted: true },
    });

    res.status(200).json({ message: "Vote successfully cast!" });
  } catch (err) {
    console.error("Vote error:", err);
    res.status(500).json({ message: "Server error while casting vote." });
  }
};

exports.getVoteStatus = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { hasVoted: true },
    });

    res.status(200).json({ hasVoted: user.hasVoted });
  } catch (err) {
    console.error("Status error:", err);
    res.status(500).json({ message: "Error checking vote status." });
  }
};
