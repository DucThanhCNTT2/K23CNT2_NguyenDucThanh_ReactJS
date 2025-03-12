import React from 'react'

export default function NdtMemberList({ ndt_Member }) {
    return (
        <div>
            <ul>
                {ndt_Member.map((member) => (
                    <li key={member.ndt_id}>
                        <strong>{member.ndt_fullname}</strong> - {member.ndt_username}
                    </li>
                ))}
            </ul>
        </div>
    )
}
