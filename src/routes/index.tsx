import {
  Button,
  Dialog,
  Image,
  Tabs,
  TextField,
  ToggleButton,
  Tooltip,
} from '@kobalte/core';
import { For, Match, Show, Switch, createEffect, createSignal } from 'solid-js';
import IconJoin from '~icons/heroicons/arrow-left-on-rectangle';
import IconRefresh from '~icons/heroicons/arrow-path';
import IconLeave from '~icons/heroicons/arrow-right-on-rectangle';
import IconReply from '~icons/heroicons/arrow-uturn-right';
import IconAtSign from '~icons/heroicons/at-symbol';
import IconCheckBadge from '~icons/heroicons/check-badge';
import IconKick from '~icons/heroicons/ban';
import IconMention from '~icons/heroicons/bell';
import IconBell from '~icons/heroicons/bell-alert';
import IconAction from '~icons/heroicons/bolt';
import IconReact from '~icons/heroicons/bolt';
import IconPin from '~icons/heroicons/bookmark';
import IconCommunity from '~icons/heroicons/building-storefront';
import IconThread from '~icons/heroicons/chat-bubble-left-ellipsis';
import IconChevronDown from '~icons/heroicons/chevron-down';
import IconSlash from '~icons/heroicons/chevron-right';
import IconChevronRight from '~icons/heroicons/chevron-right';
import IconTime from '~icons/heroicons/clock';
import IconCode from '~icons/heroicons/code-bracket';
import IconSettings from '~icons/heroicons/cog-8-tooth';
import IconCommand from '~icons/heroicons/command-line';
import IconMore from '~icons/heroicons/ellipsis-horizontal';
import IconDM from '~icons/heroicons/envelope';
import IconCollection from '~icons/heroicons/folder';
import IconFilter from '~icons/heroicons/funnel';
import IconExplore from '~icons/heroicons/globe-alt';
import IconHashtag from '~icons/heroicons/hashtag';
import IconInfo from '~icons/heroicons/information-circle';
import IconLink from '~icons/heroicons/link';
import IconSearch from '~icons/heroicons/magnifying-glass';
import IconVoice from '~icons/heroicons/microphone';
import IconTopic from '~icons/heroicons/newspaper';
import IconSend from '~icons/heroicons/paper-airplane';
import IconAttachment from '~icons/heroicons/paper-clip';
import IconGallery from '~icons/heroicons/photo';
import IconPlus from '~icons/heroicons/plus';
import IconServer from '~icons/heroicons/server-stack';
import IconShield from '~icons/heroicons/shield-check';
import IconStatus from '~icons/heroicons/signal';
import IconStar from '~icons/heroicons/star';
import IconUser from '~icons/heroicons/user';
import IconMembers from '~icons/heroicons/user-group';
import IconClose from '~icons/heroicons/x-mark';

export default function Home() {
  // Network and channel management
  const [currentWorkspace, setCurrentWorkspace] = createSignal('designhub');
  const [currentChannel, setCurrentChannel] = createSignal('#product-design');
  const [showMemberList, setShowMemberList] = createSignal(true);
  const [showWorkspaceList, setShowWorkspaceList] = createSignal(true);
  const [inputValue, setInputValue] = createSignal('');
  const [showCommandPalette, setShowCommandPalette] = createSignal(false);
  const [expandedWorkspaces, setExpandedWorkspaces] = createSignal({
    designhub: true,
    figmacraft: true,
    devspace: false,
  });

  // Toggle workspace expansion
  const toggleWorkspaceExpanded = id => {
    setExpandedWorkspaces({
      ...expandedWorkspaces(),
      [id]: !expandedWorkspaces()[id],
    });
  };

  // Workspaces (similar to IRC networks but more community-focused)
  const [workspaces] = createSignal([
    {
      id: 'designhub',
      name: 'DesignHub',
      domain: 'designhub.community',
      status: 'connected',
      unread: 0,
      channels: [
        {
          name: '#product-design',
          topic: 'User interface, UX flows, and product design discussions',
          memberCount: 128,
          unread: 3,
          mentions: 1,
          joined: true,
          pinned: true,
        },
        {
          name: '#inspiration',
          topic: 'Share design inspiration, references, and cool finds',
          memberCount: 213,
          unread: 0,
          joined: true,
        },
        {
          name: '#feedback',
          topic: 'Request and provide feedback on designs',
          memberCount: 87,
          unread: 0,
          joined: true,
        },
        {
          name: '#resources',
          topic: 'Design resources, tools, templates, and assets',
          memberCount: 145,
          joined: false,
        },
      ],
      directMessages: [{ user: 'aiden', unread: 2 }],
    },
    {
      id: 'figmacraft',
      name: 'FigmaCraft',
      domain: 'figmacraft.com',
      status: 'connected',
      channels: [
        {
          name: '#plugins',
          topic: 'Discuss and share Figma plugins',
          memberCount: 92,
          unread: 0,
          joined: true,
        },
        {
          name: '#prototyping',
          topic: 'Advanced prototyping techniques in Figma',
          memberCount: 74,
          unread: 0,
          joined: true,
          pinned: true,
        },
        {
          name: '#components',
          topic: 'Component organization and architecture',
          memberCount: 103,
          joined: false,
        },
      ],
      directMessages: [],
    },
    {
      id: 'devspace',
      name: 'DevSpace',
      domain: 'dev.space',
      status: 'connected',
      channels: [
        {
          name: '#frontend',
          topic: 'Frontend development discussions',
          memberCount: 287,
          unread: 7,
          joined: true,
        },
        {
          name: '#design-systems',
          topic: 'Building and maintaining design systems',
          memberCount: 146,
          joined: false,
        },
        {
          name: '#accessibility',
          topic: 'Making accessible interfaces for everyone',
          memberCount: 128,
          unread: 0,
          joined: true,
          pinned: true,
        },
      ],
      directMessages: [{ user: 'maya', unread: 1 }],
    },
  ]);

  // Messages in the current channel/conversation
  const [messages] = createSignal({
    designhub: {
      '#product-design': [
        {
          id: '1',
          type: 'message',
          user: { name: 'taylor', role: 'moderator' },
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
          time: '10:42',
          timestamp: new Date(Date.now() - 1000 * 60 * 35),
        },
        {
          id: '2',
          type: 'system',
          content: 'robin joined the channel',
          time: '10:45',
          timestamp: new Date(Date.now() - 1000 * 60 * 32),
        },
        {
          id: '3',
          type: 'message',
          user: { name: 'jordan', role: 'member' },
          content:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          time: '10:47',
          highlight: true,
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
        },
        {
          id: '4',
          type: 'message',
          user: { name: 'robin', role: 'member' },
          content:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
          time: '10:49',
          timestamp: new Date(Date.now() - 1000 * 60 * 28),
        },
        {
          id: '5',
          type: 'action',
          user: { name: 'jordan' },
          content: 'shares a prototype link: https://example.com/prototype',
          time: '10:51',
          timestamp: new Date(Date.now() - 1000 * 60 * 26),
        },
        {
          id: '6',
          type: 'message',
          user: { name: 'taylor', role: 'moderator' },
          content:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          time: '10:54',
          timestamp: new Date(Date.now() - 1000 * 60 * 23),
        },
        {
          id: '7',
          type: 'topic',
          user: { name: 'casey', role: 'admin' },
          content:
            'User interface, UX flows, product design discussions, and spatial visualizations',
          oldTopic: 'User interface, UX flows, and product design discussions',
          time: '10:58',
          timestamp: new Date(Date.now() - 1000 * 60 * 19),
        },
        {
          id: '8',
          type: 'message',
          user: { name: 'maya', role: 'verified' },
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
          time: '11:02',
          timestamp: new Date(Date.now() - 1000 * 60 * 15),
        },
        {
          id: '9',
          type: 'message',
          user: { name: 'jordan', role: 'member' },
          content:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          time: '11:05',
          timestamp: new Date(Date.now() - 1000 * 60 * 12),
        },
        {
          id: '10',
          type: 'message',
          user: { name: 'taylor', role: 'moderator' },
          content:
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
          time: '11:08',
          timestamp: new Date(Date.now() - 1000 * 60 * 9),
        },
      ],
      aiden: [
        {
          id: '1',
          type: 'message',
          user: { name: 'aiden', role: 'member' },
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel sapien vel ante cursus venenatis.',
          time: '10:55',
          timestamp: new Date(Date.now() - 1000 * 60 * 22),
        },
        {
          id: '2',
          type: 'message',
          user: { name: 'aiden', role: 'member' },
          content:
            'Maecenas ut felis sit amet eros tincidunt consectetur vel id arcu?',
          time: '10:56',
          timestamp: new Date(Date.now() - 1000 * 60 * 21),
        },
      ],
    },
    figmacraft: {
      '#plugins': [
        {
          id: '1',
          type: 'message',
          user: { name: 'emma', role: 'member' },
          content:
            'Fusce rhoncus dui eget urna pellentesque, vel interdum dui facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices?',
          time: '09:32',
          timestamp: new Date(Date.now() - 1000 * 60 * 145),
        },
        {
          id: '2',
          type: 'message',
          user: { name: 'lucas', role: 'moderator' },
          content:
            'Mauris bibendum neque id velit porttitor vestibulum. Sed eget mauris sed massa egestas luctus vitae quis tellus. Mauris euismod elit non turpis mattis, et fermentum lorem suscipit.',
          time: '09:35',
          timestamp: new Date(Date.now() - 1000 * 60 * 142),
        },
      ],
      '#prototyping': [
        {
          id: '1',
          type: 'message',
          user: { name: 'olivia', role: 'admin' },
          content:
            'Nulla nec malesuada nunc, id venenatis nisi. Pellentesque tristique tortor a eros eleifend, non molestie felis rutrum. Praesent fermentum eu velit eget maximus.',
          time: '10:15',
          timestamp: new Date(Date.now() - 1000 * 60 * 60),
        },
      ],
    },
    devspace: {
      '#frontend': [
        {
          id: '1',
          type: 'message',
          user: { name: 'liam', role: 'member' },
          content:
            'Integer facilisis magna at porta semper. Nunc vitae leo sit amet neque blandit aliquet. Aenean pharetra purus id lobortis accumsan.',
          time: '11:15',
          timestamp: new Date(Date.now() - 1000 * 60 * 2),
        },
        {
          id: '2',
          type: 'message',
          user: { name: 'maya', role: 'verified' },
          content:
            'Etiam tempor dui sit amet orci facilisis elementum. Nullam tincidunt tellus ac velit iaculis fringilla. Donec aliquam urna nec nibh rhoncus, ut pellentesque arcu tincidunt.',
          time: '11:17',
          timestamp: new Date(Date.now() - 1000 * 60 * 1),
        },
      ],
    },
  });

  // Members in the current channel
  const [members] = createSignal({
    designhub: {
      '#product-design': [
        { name: 'casey', role: 'admin', status: 'active', idle: 0 },
        { name: 'taylor', role: 'moderator', status: 'active', idle: 3 },
        { name: 'jordan', role: 'member', status: 'active', idle: 6 },
        { name: 'robin', role: 'member', status: 'active', idle: 12 },
        { name: 'alex', role: 'member', status: 'active', idle: 8 },
        { name: 'maya', role: 'verified', status: 'active', idle: 5 },
        { name: 'sam', role: 'member', status: 'idle', idle: 25 },
        { name: 'morgan', role: 'member', status: 'idle', idle: 45 },
        { name: 'riley', role: 'member', status: 'offline', idle: 120 },
        { name: 'avery', role: 'member', status: 'offline', idle: 180 },
      ],
      '#inspiration': [
        { name: 'casey', role: 'admin', status: 'active', idle: 0 },
        { name: 'blair', role: 'moderator', status: 'active', idle: 5 },
        { name: 'dana', role: 'member', status: 'active', idle: 10 },
      ],
    },
    figmacraft: {
      '#plugins': [
        { name: 'olivia', role: 'admin', status: 'active', idle: 0 },
        { name: 'emma', role: 'member', status: 'active', idle: 5 },
        { name: 'lucas', role: 'moderator', status: 'active', idle: 15 },
      ],
      '#prototyping': [
        { name: 'olivia', role: 'admin', status: 'active', idle: 0 },
        { name: 'noah', role: 'moderator', status: 'active', idle: 10 },
        { name: 'sophia', role: 'member', status: 'active', idle: 8 },
      ],
    },
    devspace: {
      '#frontend': [
        { name: 'zoe', role: 'moderator', status: 'active', idle: 0 },
        { name: 'liam', role: 'member', status: 'active', idle: 5 },
        { name: 'maya', role: 'verified', status: 'active', idle: 2 },
      ],
      '#accessibility': [
        { name: 'harper', role: 'admin', status: 'active', idle: 5 },
        { name: 'ethan', role: 'moderator', status: 'active', idle: 10 },
        { name: 'amara', role: 'member', status: 'active', idle: 8 },
      ],
    },
  });

  // Channel information (topics, settings)
  const [channelInfo] = createSignal({
    designhub: {
      '#product-design': {
        topic:
          'User interface, UX flows, product design discussions, and spatial visualizations',
        settings: 'Public • Moderated',
        created: '2022-01-15T12:00:00Z',
      },
      '#inspiration': {
        topic: 'Share design inspiration, references, and cool finds',
        settings: 'Public • Open',
        created: '2022-02-23T15:30:00Z',
      },
      '#feedback': {
        topic: 'Request and provide feedback on designs',
        settings: 'Public • Moderated',
        created: '2022-03-10T09:15:00Z',
      },
    },
    figmacraft: {
      '#plugins': {
        topic: 'Discuss and share Figma plugins',
        settings: 'Public • Open',
        created: '2022-03-10T09:15:00Z',
      },
      '#prototyping': {
        topic: 'Advanced prototyping techniques in Figma',
        settings: 'Public • Moderated',
        created: '2022-03-12T11:45:00Z',
      },
    },
    devspace: {
      '#frontend': {
        topic: 'Frontend development discussions',
        settings: 'Public • Open',
        created: '2022-04-05T10:30:00Z',
      },
      '#accessibility': {
        topic: 'Making accessible interfaces for everyone',
        settings: 'Public • Moderated',
        created: '2022-04-12T14:15:00Z',
      },
    },
  });

  // Special command shortcuts (inspired by IRC but modernized)
  const commands = [
    {
      name: 'join',
      description: 'Join a channel',
      usage: '/join #channel-name',
    },
    { name: 'leave', description: 'Leave a channel', usage: '/leave' },
    { name: 'dm', description: 'Direct message a user', usage: '/dm username' },
    {
      name: 'me',
      description: 'Share an action',
      usage: '/me is working on a new design',
    },
    {
      name: 'msg',
      description: 'Send a private message',
      usage: '/msg username message',
    },
    {
      name: 'nick',
      description: 'Change your display name',
      usage: '/nick new-name',
    },
    { name: 'topic', description: 'View channel topic', usage: '/topic' },
    { name: 'info', description: 'View channel information', usage: '/info' },
    {
      name: 'status',
      description: 'Set your status',
      usage: '/status away|active',
    },
    {
      name: 'invite',
      description: 'Invite a user to the channel',
      usage: '/invite username',
    },
    {
      name: 'highlight',
      description: 'Highlight text in code format',
      usage: '/highlight code',
    },
  ];

  // Get current workspace
  const getCurrentWorkspace = () => {
    return (
      workspaces().find(w => w.id === currentWorkspace()) || workspaces()[0]
    );
  };

  // Get current channel info
  const currentChannelInfo = () => {
    const workspace = getCurrentWorkspace();
    if (!workspace) return null;

    // Check if it's a direct message
    if (currentChannel().charAt(0) !== '#') {
      return {
        name: currentChannel(),
        type: 'direct',
      };
    }

    // Otherwise it's a channel
    return workspace.channels.find(c => c.name === currentChannel()) || null;
  };

  // Get current channel's messages
  const getCurrentMessages = () => {
    return messages()[currentWorkspace()]?.[currentChannel()] || [];
  };

  // Get members in current channel
  const getCurrentMembers = () => {
    return members()[currentWorkspace()]?.[currentChannel()] || [];
  };

  // Handle input for command shortcuts
  const handleInput = e => {
    e.preventDefault();
    const value = inputValue();

    // Don't process empty input
    if (!value.trim()) return;

    // Handle commands (starting with /)
    if (value.startsWith('/')) {
      // Parse command
      const parts = value.substring(1).split(' ');
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      // Example command handling (just for demo)
      if (command === 'join' && args[0]) {
        const channelToJoin = args[0];
        console.log(`Joining channel: ${channelToJoin}`);
        setCurrentChannel(channelToJoin);
      } else if (command === 'leave') {
        console.log(`Leaving channel: ${currentChannel()}`);
        // In a real app, you would update the channel list here
      } else if (command === 'me' && args.length > 0) {
        // Action message
        console.log(`* You ${args.join(' ')}`);
      } else if (command === 'dm' && args.length > 0) {
        // Start a DM
        const target = args[0];
        setCurrentChannel(target);
      }
    } else {
      // Regular message
      console.log(`Message to ${currentChannel()}: ${value}`);
    }

    // Clear input after sending
    setInputValue('');
  };

  // Formatting functions
  const formatUserRole = role => {
    switch (role) {
      case 'admin':
        return 'bg-red-500';
      case 'moderator':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };

  const formatTimeAgo = timestamp => {
    const now = new Date();
    const diff = Math.floor((now - timestamp) / 1000 / 60); // minutes

    if (diff < 1) return 'just now';
    if (diff < 60) return `${diff}m ago`;

    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const formatIdle = minutes => {
    if (minutes < 1) return 'active';
    if (minutes < 60) return `${minutes}m`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;

    const days = Math.floor(hours / 24);
    return `${days}d`;
  };

  // Get status indicator color
  const getStatusColor = status => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      default:
        return 'bg-zinc-500';
    }
  };

  return (
    <div class='flex h-screen flex-col overflow-hidden bg-zinc-950 font-sans text-zinc-300'>
      {/* Top bar with workspace status and main controls */}
      <header class='flex h-12 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3'>
        <div class='flex items-center gap-3'>
          <Button.Root
            class='rounded p-1.5 text-zinc-400 hover:bg-zinc-800'
            onClick={() => setShowWorkspaceList(!showWorkspaceList())}
          >
            <IconServer class='h-4 w-4' />
          </Button.Root>

          <div class='flex items-center gap-2 text-sm'>
            <span class='font-medium text-white'>
              {getCurrentWorkspace().name}
            </span>
            <span class='text-xs text-zinc-500'>
              {getCurrentWorkspace().domain}
            </span>
          </div>

          <div class='flex h-3 w-3 items-center justify-center rounded-full bg-zinc-800'>
            <div
              class={`h-2 w-2 rounded-full ${getCurrentWorkspace().status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
          </div>
        </div>

        <div class='flex items-center gap-3'>
          <Button.Root
            class='rounded p-1.5 text-zinc-400 hover:bg-zinc-800'
            onClick={() => setShowCommandPalette(true)}
          >
            <IconCommand class='h-4 w-4' />
          </Button.Root>
          <Button.Root class='rounded p-1.5 text-zinc-400 hover:bg-zinc-800'>
            <IconSettings class='h-4 w-4' />
          </Button.Root>
          <Button.Root class='ml-1 rounded bg-zinc-800 px-2.5 py-1 text-sm hover:bg-zinc-700'>
            taylor
          </Button.Root>
        </div>
      </header>

      <div class='flex flex-1 overflow-hidden'>
        {/* Workspace & channel list (left sidebar) */}
        <Show when={showWorkspaceList()}>
          <div class='flex w-60 flex-col overflow-hidden border-r border-zinc-800 bg-zinc-900'>
            {/* Workspaces */}
            <div class='flex-1 space-y-4 overflow-y-auto px-2 py-3'>
              <For each={workspaces()}>
                {workspace => (
                  <div class='mb-4'>
                    {/* Workspace header with collapsible toggle */}
                    <div
                      class={`mb-1 flex cursor-pointer items-center justify-between rounded px-2 py-1.5 ${
                        workspace.id === currentWorkspace() ?
                          'bg-indigo-900/40 text-indigo-300'
                        : 'hover:bg-zinc-800/70'
                      }`}
                    >
                      <div
                        class='flex flex-1 items-center gap-2 text-sm font-medium'
                        onClick={() => setCurrentWorkspace(workspace.id)}
                      >
                        <div
                          class={`h-2 w-2 rounded-full ${workspace.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}
                        ></div>
                        {workspace.name}
                      </div>
                      <Button.Root
                        class='rounded p-1 text-zinc-400 hover:bg-zinc-700'
                        onClick={e => {
                          e.stopPropagation();
                          toggleWorkspaceExpanded(workspace.id);
                        }}
                      >
                        {expandedWorkspaces()[workspace.id] ?
                          <IconChevronDown class='h-3 w-3' />
                        : <IconChevronRight class='h-3 w-3' />}
                      </Button.Root>
                    </div>

                    <Show
                      when={
                        workspace.status === 'connected' &&
                        expandedWorkspaces()[workspace.id]
                      }
                    >
                      {/* Channels */}
                      <div class='ml-1 space-y-0.5'>
                        <For each={workspace.channels.filter(c => c.joined)}>
                          {channel => (
                            <div
                              class={`flex items-center justify-between rounded px-2 py-1.5 text-sm ${
                                (
                                  currentWorkspace() === workspace.id &&
                                  currentChannel() === channel.name
                                ) ?
                                  'bg-zinc-800 text-zinc-100'
                                : 'text-zinc-400 hover:bg-zinc-800/50'
                              }`}
                              onClick={() => {
                                setCurrentWorkspace(workspace.id);
                                setCurrentChannel(channel.name);
                              }}
                            >
                              <div class='flex items-center gap-1.5 truncate'>
                                <IconHashtag class='h-3.5 w-3.5 flex-shrink-0' />
                                <span class='truncate'>
                                  {channel.name.substring(1)}
                                </span>
                              </div>

                              <div class='flex items-center gap-1.5'>
                                <Show when={channel.mentions}>
                                  <div class='flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                                    {channel.mentions}
                                  </div>
                                </Show>
                                <Show
                                  when={channel.unread && !channel.mentions}
                                >
                                  <div class='flex h-5 w-5 items-center justify-center rounded-full bg-zinc-700 text-xs'>
                                    {channel.unread}
                                  </div>
                                </Show>
                              </div>
                            </div>
                          )}
                        </For>

                        {/* Direct messages */}
                        <Show when={workspace.directMessages?.length > 0}>
                          <div class='mt-3 space-y-0.5 border-t border-zinc-800 pt-3'>
                            <div class='mx-2 mb-1 text-xs font-medium text-zinc-500'>
                              DIRECT MESSAGES
                            </div>
                            <For each={workspace.directMessages}>
                              {dm => (
                                <div
                                  class={`flex items-center justify-between rounded px-2 py-1.5 text-sm ${
                                    (
                                      currentWorkspace() === workspace.id &&
                                      currentChannel() === dm.user
                                    ) ?
                                      'bg-zinc-800 text-zinc-100'
                                    : 'text-zinc-400 hover:bg-zinc-800/50'
                                  }`}
                                  onClick={() => {
                                    setCurrentWorkspace(workspace.id);
                                    setCurrentChannel(dm.user);
                                  }}
                                >
                                  <div class='flex items-center gap-1.5'>
                                    <div class='h-3.5 w-3.5 rounded-full bg-zinc-700'></div>
                                    <span>{dm.user}</span>
                                  </div>

                                  <Show when={dm.unread}>
                                    <div class='flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
                                      {dm.unread}
                                    </div>
                                  </Show>
                                </div>
                              )}
                            </For>
                          </div>
                        </Show>
                      </div>

                      {/* Available Channels (not joined) */}
                      <Show when={workspace.channels.some(c => !c.joined)}>
                        <div class='mt-3 ml-1 border-t border-zinc-800/50 pt-2'>
                          <div class='mx-2 mb-1 text-xs font-medium text-zinc-500'>
                            BROWSE CHANNELS
                          </div>
                          <div class='space-y-0.5'>
                            <For
                              each={workspace.channels.filter(c => !c.joined)}
                            >
                              {channel => (
                                <div
                                  class='flex items-center justify-between rounded px-2 py-1.5 text-sm text-zinc-600 hover:bg-zinc-800/50'
                                  onClick={() => {
                                    // In a real app, this would trigger a join
                                    console.log(`Joining ${channel.name}...`);
                                  }}
                                >
                                  <div class='flex items-center gap-1.5'>
                                    <IconPlus class='h-3.5 w-3.5' />
                                    <span>{channel.name}</span>
                                  </div>

                                  <div class='text-xs text-zinc-700'>
                                    {channel.memberCount}
                                  </div>
                                </div>
                              )}
                            </For>
                          </div>
                        </div>
                      </Show>
                    </Show>
                  </div>
                )}
              </For>
            </div>

            {/* Create channel button */}
            <div class='border-t border-zinc-800 p-3'>
              <Button.Root class='flex w-full items-center gap-2 rounded p-2 text-sm text-zinc-400 hover:bg-zinc-800'>
                <IconPlus class='h-4 w-4' />
                <span>Create Channel</span>
              </Button.Root>
            </div>
          </div>
        </Show>

        {/* Main chat area */}
        <div class='flex flex-1 flex-col overflow-hidden'>
          {/* Channel/chat header */}
          <div class='flex h-12 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4'>
            <div class='flex items-center text-sm'>
              <Show
                when={currentChannel().charAt(0) === '#'}
                fallback={
                  <div class='flex items-center gap-2'>
                    <div class='h-3 w-3 rounded-full bg-green-500'></div>
                    <span class='font-medium'>{currentChannel()}</span>
                    <span class='text-zinc-500'>(direct message)</span>
                  </div>
                }
              >
                <div class='flex items-center gap-2'>
                  <IconHashtag class='h-4 w-4 text-indigo-400' />
                  <span class='font-medium'>
                    {currentChannel().substring(1)}
                  </span>
                  <span class='text-zinc-500'>•</span>
                  <span class='max-w-md truncate text-zinc-400'>
                    {channelInfo()[currentWorkspace()]?.[currentChannel()]
                      ?.topic || 'No topic set'}
                  </span>
                </div>
              </Show>
            </div>

            <div class='flex items-center gap-3 text-sm'>
              <Show when={currentChannel().charAt(0) === '#'}>
                <div class='flex items-center gap-2 text-zinc-500'>
                  <div class='flex items-center gap-1'>
                    <IconMembers class='h-4 w-4' />
                    <span>{getCurrentMembers().length}</span>
                  </div>
                  <Button.Root
                    class={`rounded p-1.5 ${
                      showMemberList() ?
                        'bg-zinc-800 text-zinc-300'
                      : 'text-zinc-500 hover:bg-zinc-800'
                    }`}
                    onClick={() => setShowMemberList(!showMemberList())}
                  >
                    <IconMembers class='h-4 w-4' />
                  </Button.Root>
                </div>
              </Show>
              <Button.Root class='rounded p-1.5 text-zinc-500 hover:bg-zinc-800'>
                <IconInfo class='h-4 w-4' />
              </Button.Root>
              <Button.Root class='rounded p-1.5 text-zinc-500 hover:bg-zinc-800'>
                <IconSearch class='h-4 w-4' />
              </Button.Root>
            </div>
          </div>

          {/* Chat messages area */}
          <div class='flex flex-1 overflow-hidden'>
            {/* Messages */}
            <div
              class='flex-1 overflow-y-auto px-2 py-4'
              style='scrollbar-width: thin;'
            >
              <div class='mx-auto max-w-3xl space-y-2 pb-2'>
                {/* Channel banner with info */}
                <Show when={currentChannel().charAt(0) === '#'}>
                  <div class='mx-2 my-3 rounded-md border border-zinc-800 bg-zinc-900 px-5 py-4'>
                    <div class='mb-2 flex items-center gap-2 font-bold'>
                      <IconHashtag class='h-4 w-4 text-indigo-400' />
                      {currentChannel().substring(1)}
                    </div>
                    <div class='mb-3 text-sm text-zinc-400'>
                      {channelInfo()[currentWorkspace()]?.[currentChannel()]
                        ?.topic || 'No topic set'}
                    </div>
                    <div class='flex gap-4 text-xs text-zinc-500'>
                      <div>
                        Settings:{' '}
                        {channelInfo()[currentWorkspace()]?.[currentChannel()]
                          ?.settings || 'Public'}
                      </div>
                      <div>
                        • Created:{' '}
                        {new Date(
                          channelInfo()[currentWorkspace()]?.[currentChannel()]
                            ?.created || Date.now(),
                        ).toLocaleDateString()}
                      </div>
                      <div>• Members: {getCurrentMembers().length}</div>
                    </div>
                  </div>
                </Show>

                {/* Messages list */}
                <For each={getCurrentMessages()}>
                  {message => (
                    <div
                      class={`flex rounded-md px-4 py-2.5 ${message.highlight ? 'border-l-2 border-indigo-500 bg-indigo-950/30' : 'hover:bg-zinc-900'}`}
                    >
                      {/* Message content */}
                      <div class='flex-1 space-y-1'>
                        <Switch>
                          {/* Regular message */}
                          <Match when={message.type === 'message'}>
                            <div class='flex items-start'>
                              <div class='mr-3 flex-shrink-0'>
                                <div class='flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 text-lg'>
                                  {message.user.name.charAt(0).toUpperCase()}
                                </div>
                              </div>

                              <div class='flex-1'>
                                <div class='flex items-center gap-2'>
                                  <span
                                    class={`font-medium ${
                                      message.user.role === 'admin' ?
                                        'text-red-400'
                                      : message.user.role === 'moderator' ?
                                        'text-green-400'
                                      : message.user.role === 'verified' ?
                                        'text-blue-400'
                                      : 'text-indigo-400'
                                    }`}
                                  >
                                    {message.user.name}
                                    {message.user.role === 'verified' && (
                                      <IconCheckBadge class='ml-1 inline-block h-4 w-4 text-blue-400' />
                                    )}
                                  </span>
                                  <span class='text-xs text-zinc-500'>
                                    {message.time}
                                  </span>
                                </div>
                                <div class='mt-1 text-zinc-300'>
                                  {message.content}
                                </div>
                              </div>
                            </div>
                          </Match>

                          {/* System notification */}
                          <Match when={message.type === 'system'}>
                            <div class='flex justify-center py-1'>
                              <div class='rounded-full bg-zinc-900/50 px-3 py-1 text-sm text-zinc-500'>
                                {message.content}
                              </div>
                            </div>
                          </Match>

                          {/* Action (/me) */}
                          <Match when={message.type === 'action'}>
                            <div class='flex items-center gap-2 py-1 text-indigo-400 italic'>
                              <span class='font-medium'>
                                {message.user.name}
                              </span>
                              <span>{message.content}</span>
                              <span class='text-xs text-zinc-500'>
                                {message.time}
                              </span>
                            </div>
                          </Match>

                          {/* Topic change */}
                          <Match when={message.type === 'topic'}>
                            <div class='flex justify-center py-1'>
                              <div class='rounded-full bg-zinc-900/50 px-3 py-1 text-sm text-zinc-500'>
                                <span class='text-indigo-400'>
                                  {message.user.name}
                                </span>{' '}
                                changed the topic to:{' '}
                                <span class='text-zinc-400'>
                                  {message.content}
                                </span>
                              </div>
                            </div>
                          </Match>
                        </Switch>
                      </div>

                      {/* Message actions */}
                      <div class='flex items-center gap-1 self-start pt-1 text-sm text-zinc-600 opacity-0 group-hover:opacity-100'>
                        <Button.Root class='rounded p-1 hover:bg-zinc-800 hover:text-zinc-400'>
                          <IconReply class='h-4 w-4' />
                        </Button.Root>
                        <Button.Root class='rounded p-1 hover:bg-zinc-800 hover:text-zinc-400'>
                          <IconReact class='h-4 w-4' />
                        </Button.Root>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>

            {/* Member list (right sidebar) */}
            <Show when={showMemberList() && currentChannel().charAt(0) === '#'}>
              <div class='flex w-56 flex-col border-l border-zinc-800 bg-zinc-900'>
                <div class='flex items-center justify-between border-b border-zinc-800 px-3 py-2 text-sm'>
                  <span class='text-zinc-400'>
                    Members ({getCurrentMembers().length})
                  </span>
                  <Button.Root
                    class='rounded p-1 text-zinc-500 hover:bg-zinc-800'
                    onClick={() => setShowMemberList(false)}
                  >
                    <IconClose class='h-4 w-4' />
                  </Button.Root>
                </div>

                <div class='flex-1 overflow-y-auto py-2'>
                  {/* Admins */}
                  <Show
                    when={getCurrentMembers().some(u => u.role === 'admin')}
                  >
                    <div class='px-3 pt-1 pb-1 text-xs font-medium text-zinc-500'>
                      ADMINS
                    </div>
                    <div class='mb-2'>
                      <For
                        each={getCurrentMembers().filter(
                          u => u.role === 'admin',
                        )}
                      >
                        {user => (
                          <div class='group flex items-center justify-between px-3 py-1.5 text-sm hover:bg-zinc-800'>
                            <div class='flex items-center gap-2'>
                              <div
                                class={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`}
                              ></div>
                              <span class='text-red-400'>{user.name}</span>
                            </div>
                            <div class='text-xs text-zinc-600'>
                              {formatIdle(user.idle)}
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>

                  {/* Moderators */}
                  <Show
                    when={getCurrentMembers().some(u => u.role === 'moderator')}
                  >
                    <div class='px-3 pt-1 pb-1 text-xs font-medium text-zinc-500'>
                      MODERATORS
                    </div>
                    <div class='mb-2'>
                      <For
                        each={getCurrentMembers().filter(
                          u => u.role === 'moderator',
                        )}
                      >
                        {user => (
                          <div class='group flex items-center justify-between px-3 py-1.5 text-sm hover:bg-zinc-800'>
                            <div class='flex items-center gap-2'>
                              <div
                                class={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`}
                              ></div>
                              <span class='text-green-400'>{user.name}</span>
                            </div>
                            <div class='text-xs text-zinc-600'>
                              {formatIdle(user.idle)}
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>

                  {/* Verified users */}
                  <Show
                    when={getCurrentMembers().some(u => u.role === 'verified')}
                  >
                    <div class='px-3 pt-1 pb-1 text-xs font-medium text-zinc-500'>
                      VERIFIED USERS
                    </div>
                    <div class='mb-2'>
                      <For
                        each={getCurrentMembers().filter(
                          u => u.role === 'verified',
                        )}
                      >
                        {user => (
                          <div class='group flex items-center justify-between px-3 py-1.5 text-sm hover:bg-zinc-800'>
                            <div class='flex items-center gap-2'>
                              <div
                                class={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`}
                              ></div>
                              <span class='flex items-center gap-1 text-blue-400'>
                                {user.name}
                                <IconCheckBadge class='h-3.5 w-3.5 text-blue-400' />
                              </span>
                            </div>
                            <div class='text-xs text-zinc-600'>
                              {formatIdle(user.idle)}
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>

                  {/* Regular members */}
                  <Show
                    when={getCurrentMembers().some(u => u.role === 'member')}
                  >
                    <div class='px-3 pt-1 pb-1 text-xs font-medium text-zinc-500'>
                      MEMBERS
                    </div>
                    <div>
                      <For
                        each={getCurrentMembers().filter(
                          u => u.role === 'member',
                        )}
                      >
                        {user => (
                          <div class='group flex items-center justify-between px-3 py-1.5 text-sm hover:bg-zinc-800'>
                            <div class='flex items-center gap-2'>
                              <div
                                class={`h-2 w-2 rounded-full ${getStatusColor(user.status)}`}
                              ></div>
                              <span class='text-zinc-400'>{user.name}</span>
                            </div>
                            <div class='text-xs text-zinc-600'>
                              {formatIdle(user.idle)}
                            </div>
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>
                </div>
              </div>
            </Show>
          </div>

          {/* Input area */}
          <div class='border-t border-zinc-800 bg-zinc-900 px-4 py-3'>
            <form
              onSubmit={handleInput}
              class='flex items-center rounded-md bg-zinc-800 px-3 focus-within:ring-1 focus-within:ring-indigo-500'
            >
              <div class='mr-2 text-sm text-zinc-600'>
                {currentChannel().charAt(0) === '#' ?
                  <IconHashtag class='h-4 w-4' />
                : <div class='h-4 w-4 rounded-full bg-green-500'></div>}
              </div>

              <TextField.Root class='flex-1'>
                <TextField.Input
                  value={inputValue()}
                  onInput={e => setInputValue(e.target.value)}
                  placeholder={`Message ${currentChannel()}`}
                  class='w-full border-0 bg-transparent px-1 py-2.5 text-sm placeholder:text-zinc-600 focus:outline-none'
                  onKeyDown={e => {
                    if (e.key === 'Tab' && inputValue().startsWith('/')) {
                      e.preventDefault();
                      // Command auto-completion would go here
                    }
                  }}
                />
              </TextField.Root>

              <div class='ml-2 flex items-center gap-2'>
                <Button.Root class='rounded p-1.5 text-zinc-500 hover:bg-zinc-700'>
                  <IconAttachment class='h-4 w-4' />
                </Button.Root>
                <Button.Root
                  type='submit'
                  class='rounded p-1.5 text-indigo-400 hover:bg-zinc-700'
                >
                  <IconSend class='h-4 w-4' />
                </Button.Root>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Command palette dialog */}
      <Show when={showCommandPalette()}>
        <Dialog.Root
          open={showCommandPalette()}
          onOpenChange={setShowCommandPalette}
        >
          <Dialog.Portal>
            <Dialog.Overlay class='fixed inset-0 bg-black/75' />
            <Dialog.Content class='fixed top-[20%] left-1/2 w-[480px] -translate-x-1/2 rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-zinc-300 shadow-xl'>
              <Dialog.Title class='mb-4 text-lg font-bold'>
                Quick Commands
              </Dialog.Title>
              <div class='max-h-[340px] overflow-y-auto'>
                <table class='w-full border-collapse text-sm'>
                  <thead>
                    <tr class='border-b border-zinc-800 text-zinc-500'>
                      <th class='w-20 px-3 py-2 text-left'>Command</th>
                      <th class='px-3 py-2 text-left'>Description</th>
                      <th class='w-40 px-3 py-2 text-left'>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <For each={commands}>
                      {cmd => (
                        <tr class='border-b border-zinc-800/50 hover:bg-zinc-800/30'>
                          <td class='px-3 py-2 font-medium text-indigo-400'>
                            /{cmd.name}
                          </td>
                          <td class='px-3 py-2'>{cmd.description}</td>
                          <td class='px-3 py-2 text-zinc-500'>{cmd.usage}</td>
                        </tr>
                      )}
                    </For>
                  </tbody>
                </table>
              </div>
              <div class='mt-4 flex justify-end'>
                <Button.Root
                  class='rounded-md bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-700'
                  onClick={() => setShowCommandPalette(false)}
                >
                  Close
                </Button.Root>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Show>

      <style>{`
        /* Modern scrollbar styling */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(82, 82, 91, 0.5);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(82, 82, 91, 0.8);
        }
      `}</style>
    </div>
  );
}
