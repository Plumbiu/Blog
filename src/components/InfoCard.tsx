import Link from 'next/link'
import Typography from '@mui/material/Typography'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import EamilIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import LocationIcon from '@mui/icons-material/HomeOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkIcon from '@mui/icons-material/Link'
import { useUserInfo } from '@/lib/info'

export default async function InfoCard() {
  const { user, followers, following, public_repos } = await useUserInfo()
  const infoMap = [
    {
      primary: 'Plumbiu',
      icon: <GithubIcon />,
      href: 'https://github.com/Plumbiu',
    },
    {
      primary: 'plumbiuzz@gmail.com',
      icon: <EamilIcon />,
    },
    { primary: user.location, icon: <LocationIcon /> },
    {
      primary: user.twitter,
      icon: <TwitterIcon />,
      href: 'https://twitter.com/Plumbiu',
    },
    {
      primary: user.blog,
      icon: <LinkIcon />,
      href: user.blog,
    },
  ]
  const infoGithub = [
    {
      primary: 'Repos',
      count: public_repos.length,
      href: 'https://github.com/Plumbiu?tab=repositories',
    },
    {
      primary: 'Followers',
      count: followers.length,
      href: 'https://github.com/Plumbiu?tab=followers',
    },
    {
      primary: 'Following',
      count: following.length,
      href: 'https://github.com/Plumbiu?tab=following',
    },
  ]
  const infoBlog = [
    { primary: '文章', href: '/article' },
    { primary: '标签', href: '/tags' },
    { primary: '分类', href: '/categories' },
  ]
  return (
    <div className="blog-info">
      <Box
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Link href="https://github.com/Plumbiu">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt={user.name}
                  src={user.avatar}
                />
              </Link>
            </ListItemAvatar>
            <ListItemText
              sx={{
                px: 2,
              }}
              primary={`👋 ${user.name}`}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Bio
                  </Typography>
                  {` — ${user.bio}`}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Stack direction="row" spacing={2}>
              {infoBlog.map(({ href, primary }) => (
                <Button key={href} component="a" href={href}>
                  <Badge color="secondary" badgeContent={public_repos.length}>
                    {primary}
                  </Badge>
                </Button>
              ))}
            </Stack>
          </ListItem>
          {infoMap.map(({ icon, primary, href }) => (
            <ListItem key={href} disablePadding>
              {href ? (
                <ListItemButton component="a" href={href} target="__blank">
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={primary} />
                </ListItemButton>
              ) : (
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={primary} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          useFlexGap
          flexWrap="wrap"
          sx={{
            pt: 1,
          }}
        >
          {infoGithub.map(({ primary, href, count }) => (
            <Button key={href} component="a" href={href} target="__blank">
              <Badge color="secondary" badgeContent={count}>
                {primary}
              </Badge>
            </Button>
          ))}
        </Stack>
      </Box>
    </div>
  )
}
